<template>
  <section id="footer">
    <div class="footer-content">
      <div class="footer-links">
        <h3>เกี่ยวกับเรา</h3>
        <ul>
          <li><a href="#">ข้อมูลเกี่ยวกับเรา</a></li>
          <li><a href="#">นโยบายความเป็นส่วนตัว</a></li>
          <li><a href="#">เงื่อนไขการใช้งาน</a></li>
          <li><a href="#">การติดต่อเรา</a></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h3>ติดต่อเรา</h3>
        <p><strong>อีเมล:</strong> contact@car-guru.com</p>
        <p><strong>โทรศัพท์:</strong> +66 123 456 789</p>
        <p><strong>ที่อยู่:</strong> 123 ถนนบางนา กรุงเทพมหานคร, ประเทศไทย</p>
      </div>

      <div class="footer-social">
        <h3>ติดตามเรา</h3>
        <div class="social-icons">
          <a href="#" target="_blank" class="social-icon">
            <img src="/assets/facebook-icon.png" alt="Facebook" width="30" height="30">
          </a>
          <a href="#" target="_blank" class="social-icon">
            <img src="/assets/twitter-icon.png" alt="Twitter" width="30" height="30">
          </a>
          <a href="#" target="_blank" class="social-icon">
            <img src="/assets/instagram-icon.png" alt="Instagram" width="30" height="30">
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Car Guru. All rights reserved.</p>
    </div>
  </section>
</template>

<script>

</script>

<style>
#footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.footer-links,
.footer-contact,
.footer-social {
  flex: 1;
  padding: 10px;
  min-width: 200px;
}

.footer-links h3,
.footer-contact h3,
.footer-social h3 {
  margin-bottom: 15px;
  font-size: 18px;
}

.footer-links ul {
  list-style-type: none;
  padding-left: 0;
}

.footer-links li {
  margin: 5px 0;
}

.footer-links a {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
}

.footer-links a:hover {
  text-decoration: underline;
}

.footer-contact p,
.footer-social .social-icons a {
  font-size: 14px;
}

.social-icons {
  display: flex;
  gap: 10px;
  justify-content: start;
}

.social-icon img {
  width: 30px;
  height: 30px;
}

.footer-bottom {
  font-size: 14px;
  margin-top: 20px;
  border-top: 1px solid #ffffff;
  padding-top: 10px;
}
</style>