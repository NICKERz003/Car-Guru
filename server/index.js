const express = require('express');
const bodyparser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();  // โหลดค่าจากไฟล์ .env

app.use(cors());
app.use(express.json());  // parse JSON request
app.use(express.urlencoded({ extended: true }));  // parse URL-encoded data

let users = [];
const port = 8000;

let conn = null;

const initMySQL = async () => {
    try {
        conn = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'db_projectse',
        });
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
        await conn.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);

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

            return res.status(200).json({ message: 'เข้าสู่ระบบสำเร็จ', token });  // ส่งผลลัพธ์เพียงครั้งเดียว
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




const closeConnection = async () => {
    if (conn) {
        await conn.end();
    }
};

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_projectse',
    waitForConnections: true,
    connectionLimit: 10,  // จำนวนการเชื่อมต่อสูงสุด
    queueLimit: 0,
});

app.get('/testNewDB', async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM users')
        res.json(results)
    } catch (error) {
        console.error('Error fetching users:', error.message)
        res.status(500).json({ error: 'Error fetching users' })
    }
})

app.listen(port, async (req, res) => {
    await initMySQL();
    console.log('http server running  ' + port);
});
