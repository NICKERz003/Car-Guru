<template>
  <section id="footer">
    
    <div class="footer-content">
      <!-- Column 1 -->
      <div class="footer-column">
        <h3 class="column-title">รถทั้งหมด</h3>
        <ul class="footer-links">
          <li><a href="/">รถยนต์ไฟฟ้า</a></li>
          <li><a href="/">รถยนต์ที่นิยมในไทย</a></li>
          <li><a href="/">รถยนต์ที่มาใหม่ในไทย</a></li>
          <li><a href="/">โปรโมชั่นและดีลพิเศษ</a></li>
        </ul>
      </div>
      
      <!-- Column 3 -->
      <div class="footer-column">
        <h3 class="column-title">เว็บไซต์</h3>
        <ul class="footer-links">
          <li><a href="#">ติดต่อเรา</a></li>
          <li><a href="/Update-News">ข่าวสาร</a></li>
          <li><a href="/login-page">เข้าสู่ระบบ/สมัครสมาชิก</a></li>
        </ul>

        <div class="social-section">
          <h3>อัปเดตคอนเทนต์ใหม่ รับดีลพิเศษก่อนใคร ที่นี่!</h3>
          <div class="social-icons">
            <a href="#" class="social-icon">
              <img src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338509_1280.png" alt="Facebook" width="30" height="30">
            </a>
            <a href="#" class="social-icon">
              <img src="https://th.bing.com/th/id/R.1fcdfa46f0d86204197199f44c2f2a04?rik=FP5HsWTgkt%2bGuQ&pid=ImgRaw&r=0" alt="Twitter" width="30" height="30">
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-links-bottom">
        <a href="#privacy">นโยบายความเป็นส่วนตัว</a>
        <a href="#">เงื่อนไขการใช้บริการ</a>
        <a href="#">ติดต่อผู้ดูแล</a>
      </div>
      <p class="copyright">&copy; 2025 CarGuru.com All rights reserved.</p>
    </div>
  </section>
</template>

<script>
// Your script here if needed
</script>

<style>
#footer {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
  padding: 40px 20px 20px;
  font-family: 'Prompt', sans-serif;
}

.footer-logo {
  text-align: center;
  margin-bottom: 40px;
}

.footer-logo img {
  max-width: 200px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-column {
  flex: 1;
  min-width: 250px;
  margin-bottom: 20px;
  padding: 0 15px;
}

.column-title {
  color: #ffff00;
  font-size: 16px;
  margin-bottom: 12px;
  font-weight: 500;
  text-transform: none;
  text-shadow: none;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0 0 25px 0;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  font-size: 14px;
  text-shadow: none;
  transition: color 0.3s ease, text-decoration 0.3s ease;
}

.footer-links a:hover {
  text-decoration: underline;
}

.social-section {
  margin-top: 20px;
}

.social-section h3 {
  font-size: 14px;
  margin-bottom: 15px;
  color: white;
  text-shadow: none;
}

.social-icons {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  justify-content: flex-start;
}

.social-icon img {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
}

.social-icon img:hover {
  transform: scale(1.2);
}

.footer-bottom {
  max-width: 1200px;
  margin: 30px auto 0;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  text-align: center;
  font-size: 13px;
}

.footer-links-bottom {
  margin-bottom: 10px;
}

.footer-links-bottom a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  text-shadow: none;
}

.footer-links-bottom a:hover {
  text-decoration: underline;
}

.copyright {
  margin: 0;
  font-size: 12px;
  border-top: none;
  padding-top: 0;
}

/* Add Prompt font */
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500&display=swap');

/* Responsive adjustments */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  
  .footer-column {
    width: 100%;
    margin-bottom: 30px;
  }
}
</style>
