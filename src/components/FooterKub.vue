<template>
  <section id="footer">
    <div class="footer-logo">
      <img src="/images/logo.png" alt="CARGURU">
    </div>
    
    <div class="footer-content">
      <!-- Column 1 -->
      <div class="footer-column">
        <h3 class="column-title">รถทั้งหมด</h3>
        <ul class="footer-links">
          <li><a href="#">รถยนต์ไฟฟ้า</a></li>
          <li><a href="#">รถยนต์ที่นิยมในไทย</a></li>
          <li><a href="#">รถยนต์ที่มาใหม่ในไทย</a></li>
          <li><a href="#">โปรโมชั่นและดีลพิเศษ</a></li>
          <li><a href="#">ไฟแนนซ์รถยนต์</a></li>
        </ul>
      </div>
      
      
      <!-- Column 3 -->
      <div class="footer-column">
        <h3 class="column-title">เว็บไซต์</h3>
        <ul class="footer-links">
          <li><a href="#">ติดต่อเรา</a></li>
          <li><a href="#">เงื่อนไขการใช้งาน</a></li>
          <li><a href="#">เข้าสู่ระบบ/สมัครสมาชิก</a></li>
        </ul>

        <div class="social-section">
          <h3>อัปเดตคอนเทนต์ใหม่ รับดีลพิเศษก่อนใคร แอดเลย!</h3>
          <div class="social-icons">
            <a href="#" class="social-icon">
              <img src="/images/facebook.png" alt="Facebook" width="30" height="30">
            </a>
            <a href="#" class="social-icon">
              <img src="/images/twitter.png" alt="Twitter" width="30" height="30">
            </a>
            <a href="#" class="social-icon">
              <img src="/images/youtube.png" alt="YouTube" width="30" height="30">
            </a>
          </div>
          <!-- <div class="qr-code">
            <img src="/images/line-qr.png" alt="LINE QR Code" width="100" height="100">
            <a href="#" class="line-button">
              <img src="/images/line-icon.png" alt="LINE" width="50" height="50">
            </a>
          </div> -->
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
  background-color: #2c3e50;
  color: white;
  padding: 40px 20px 20px;
  font-family: 'Prompt', sans-serif;
}

.footer-logo {
  text-align: center;
  margin-bottom: 30px;
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
}

.qr-code {
  display: flex;
  align-items: center;
  gap: 15px;
}

.qr-code img {
  width: 100px;
  height: 100px;
}

.line-button img {
  width: 50px;
  height: 50px;
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
  }
}
</style>