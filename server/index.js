const express = require('express');
const bodyparser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();  // โหลดค่าจากไฟล์ .env

app.use(cors({}));
app.use(express.json());  // parse JSON request
app.use(express.urlencoded({ extended: true }));  // parse URL-encoded data

const port = 8000;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_projectse',
    waitForConnections: true,
    connectionLimit: 10,  // จำนวนการเชื่อมต่อสูงสุด
    queueLimit: 0,
});

const initMySQL = async () => {
    try {
        await pool.getConnection(); // ใช้ pool เชื่อมต่อฐานข้อมูล
        console.log("MySQL connection established successfully");
    } catch (error) {
        console.error("Error connecting to MySQL:", error.message);
        process.exit(1); // หยุดการทำงานของแอปหากไม่สามารถเชื่อมต่อกับฐานข้อมูล
    }
};

// Registration API
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
    }

    try {
        // Check if user exists
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (rows.length > 0) {
            return res.status(400).json({ message: 'อีเมลนี้มีผู้ใช้แล้ว' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into the database
        await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);

        res.status(201).json({ message: 'ลงทะเบียนสำเร็จ' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'เกิดข้อผิดพลาด' });
    }
});

// Login API
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
    }

    try {
        // Find user by email
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

        if (rows.length === 0) {
            return res.status(401).json({ message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' });
        }

        const user = rows[0];

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            // Create JWT token
            const token = jwt.sign({ userId: user.id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });

            return res.status(200).json({ message: 'เข้าสู่ระบบสำเร็จ', token });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'เกิดข้อผิดพลาด' });
    }
});

// Middleware สำหรับตรวจสอบ JWT token
function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1]; // รับ token จาก header

    if (!token) {
        return res.status(401).json({ message: 'กรุณาเข้าสู่ระบบ' });
    }

    // ตรวจสอบ token ว่า valid หรือหมดอายุ
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Token หมดอายุหรือไม่ถูกต้อง' });
        }

        req.user = decoded;  // บันทึกข้อมูลผู้ใช้ลงใน request object
        next();  // ให้ไปยัง route ถัดไป
    });
}

// ใช้ middleware ตรวจสอบ token สำหรับเส้นทางที่ต้องการการยืนยันตัวตน
app.use('/profile', authenticateToken);

app.get('/verifyToken', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Token is valid' });
});

// Profile API
app.get('/profile', authenticateToken, async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [req.user.userId]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'ไม่พบผู้ใช้' });
        }

        res.json({ profile: rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'เกิดข้อผิดพลาด' });
    }
});

// Update Profile API
app.put('/profile', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email) {
        return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
    }

    try {
        // หาผู้ใช้ตาม userId ที่ได้รับจาก JWT
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [req.user.userId]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'ไม่พบผู้ใช้' });
        }

        const user = rows[0];

        // หากต้องการอัปเดตรหัสผ่าน ให้ทำการแฮชรหัสผ่านใหม่
        let hashedPassword = user.password;
        if (password) {
            hashedPassword = await bcrypt.hash(password, 10);  // แฮชรหัสผ่านใหม่
        }

        // อัปเดตข้อมูลในฐานข้อมูล
        await pool.query('UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?',
            [username, email, hashedPassword, req.user.userId]);

        res.status(200).json({ message: 'โปรไฟล์ถูกอัปเดตเรียบร้อยแล้ว' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'เกิดข้อผิดพลาดในการอัปเดตโปรไฟล์' });
    }
});

// API cars filter
app.get('/cars', async (req, res) => {
    const { brand, model, price, page = 1 } = req.query;
    const itemsPerPage = 20;
    let query = 'SELECT * FROM cars WHERE 1=1';
    const params = [];

    if (brand) {
        query += ' AND brand LIKE ?';
        params.push(`%${brand}%`);
    }

    if (model) {
        query += ' AND model LIKE ?';
        params.push(`%${model}%`);
    }

    if (price) {
        const [minPrice, maxPrice] = price.split('-').map(Number);
        if (maxPrice) {
            query += ' AND price BETWEEN ? AND ?';
            params.push(minPrice, maxPrice);
        } else {
            query += ' AND price >= ?';
            params.push(minPrice);
        }
    }

    query += ' LIMIT ?, ?';  // เพิ่ม LIMIT สำหรับการแบ่งหน้า
    params.push((page - 1) * itemsPerPage, itemsPerPage); // คำนวณ offset

    try {
        const [results] = await pool.query(query, params);
        const [totalCount] = await pool.query('SELECT COUNT(*) AS total FROM cars WHERE 1=1');
        res.json({
            cars: results,
            total: totalCount[0].total, // จำนวนทั้งหมดที่ตรงกับคำค้นหานี้
        });
    } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).json({ message: 'Error fetching cars' });
    }
});

app.get('/cars/brands', async (req, res) => {
    try {
        // ดึงข้อมูลแบรนด์จากฐานข้อมูล
        const [rows] = await pool.query('SELECT DISTINCT brand FROM cars');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching brands:', error);
        res.status(500).json({ message: 'Error fetching brands' });
    }
});

app.get('/cars/models/:brand', async (req, res) => {
    const { brand } = req.params;  // รับค่าจาก URL parameter (แบรนด์)

    try {
        // ดึงข้อมูลรุ่น, ราคา, และภาพจากฐานข้อมูลตามแบรนด์
        const [rows] = await pool.query('SELECT model, price, image_url FROM cars WHERE brand = ?', [brand]);

        // หากไม่มีข้อมูลในฐานข้อมูล
        if (rows.length === 0) {
            return res.status(404).json({ message: 'ไม่พบข้อมูลรุ่นรถของแบรนด์นี้' });
        }

        // ส่งข้อมูลรุ่น, ราคา และภาพกลับไป
        res.json(rows);
    } catch (error) {
        console.error('Error fetching models:', error);
        res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลรุ่นรถ' });
    }
});

app.get('/cars/search', async (req, res) => {
    const { query } = req.query;  // รับค่าคำค้นหาจาก query string
    try {
        // ค้นหาข้อมูลในตาราง cars โดยใช้คำค้นหาจากแบรนด์หรือรุ่น
        const [results] = await pool.query(
            'SELECT * FROM cars WHERE brand LIKE ? OR model LIKE ?',
            [`%${query}%`, `%${query}%`]  // การใช้ LIKE กับคำค้นหาพร้อม % (wildcard)
        );
        res.json(results);  // ส่งผลลัพธ์ที่ค้นหากลับไปที่ frontend
    } catch (error) {
        console.error('Error searching cars:', error);
        res.status(500).json({ message: 'Error searching cars' });
    }
});

app.get('/cars/models', async (req, res) => {
    const { brand, model } = req.query;
    try {
        const [rows] = await pool.query('SELECT * FROM cars WHERE brand = ? AND model = ?', [brand, model]);
        if (rows.length > 0) {
            res.json(rows);
        } else {
            res.status(404).json({ message: 'ไม่พบข้อมูลรถที่เลือก' });
        }
    } catch (error) {
        console.error('Error fetching car data:', error);
        res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูล' });
    }
});

app.get('/cars/compare', async (req, res) => {
    const { ids } = req.query;  // รับค่ารหัสของรถยนต์ที่เลือกมาเปรียบเทียบ
    if (!ids || ids.length < 2) {
        return res.status(400).json({ message: 'กรุณาเลือก 2 คันขึ้นไปเพื่อเปรียบเทียบ' });
    }

    try {
        // ดึงข้อมูลของรถยนต์ที่เลือก
        const query = `SELECT * FROM cars WHERE id IN (?)`;
        const [cars] = await pool.query(query, [ids.split(',')]);

        if (cars.length === 0) {
            return res.status(404).json({ message: 'ไม่พบข้อมูลของรถยนต์ที่เลือก' });
        }

        res.json(cars);  // ส่งข้อมูลที่ดึงมา
    } catch (error) {
        console.error('Error fetching car data:', error);
        res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลรถยนต์' });
    }
});


app.listen(port, async () => {
    await initMySQL();
    console.log('http server running  ' + port);
});
