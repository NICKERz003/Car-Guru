<template>
  <section id="car-detail">
    
  </section>
</template>

<script>
export default {
  name: 'DetailNewCar',
  props: ['id'], // รับค่า id จาก URL
  data() {
    return {
      cars: [
        { 
        id: 1, 
        image: 'https://mpics.mgronline.com/pics/Images/568000002700501.JPEG',
        image2: 'https://mpics.mgronline.com/pics/Images/568000002700501.JPEG',
        image3: 'https://mpics.mgronline.com/pics/Images/568000002700501.JPEG',
        image4: 'https://mpics.mgronline.com/pics/Images/568000002700501.JPEG',
        image5: 'https://mpics.mgronline.com/pics/Images/568000002700501.JPEG',
        brand: 'Mitsubishi', 
        model: 'XFORCE HEV', 
        price: 899000, 
        description: 'Mitsubishi XFORCE HEV – SUV ขนาดเล็กขับเคลื่อนด้วยระบบไฮบริด ขุมพลังเครื่องยนต์ MIVEC 1.6 ลิตร ประหยัดน้ำมัน พร้อมดีไซน์ที่สปอร์ตและเทคโนโลยีทันสมัย เหมาะสำหรับการใช้งานในเมืองและเดินทางไกล' },
        { 
        id: 2, 
        image: 'https://krungsrimarket.cjdataservice.com/uploads/articles/article_content_1bc.jpg', 
        brand: 'Nissan', 
        model: 'Serena e-POWER', 
        price: 1690000, 
        description: 'Mitsubishi XFORCE HEV – SUV ขนาดเล็กขับเคลื่อนด้วยระบบไฮบริด ขุมพลังเครื่องยนต์ MIVEC 1.6 ลิตร ประหยัดน้ำมัน พร้อมดีไซน์ที่สปอร์ตและเทคโนโลยีทันสมัย เหมาะสำหรับการใช้งานในเมืองและเดินทางไกล' },
        { 
        id: 3, 
        image: 'https://cdn.wheel-size.com/thumbs/d3/97/d397b9de6255f8a9a881236ce1b82253.jpg', 
        brand: 'Zeekr', 
        model: '009', 
        price: 3099000, 
        description: 'Zeekr 009 2025 – รถ MPV ไฟฟ้าหรูจาก Geely มาพร้อมมอเตอร์คู่ให้กำลัง 603 แรงม้า และแบตเตอรี่ขนาดใหญ่ที่รองรับระยะทางไกล ภายในหรูหราด้วยที่นั่งแบบ VIP เหมาะสำหรับการเดินทางระดับพรีเมียม' },
        { 
        id: 4, 
        image: 'https://autostation.com/wp-content/uploads/2025/03/05-DEEPAL-S05-1-scaled.jpg', 
        brand: 'Deepal', 
        model: 'S05 2025', 
        price: 799000, 
        description: 'Deepal S05 2025 – SUV ไฟฟ้าขนาดกลางจาก Changan มีให้เลือกทั้งรุ่นไฟฟ้าเต็มรูปแบบ (BEV) และรุ่น REEV ที่ขยายระยะทางด้วยเครื่องยนต์ 1.5 ลิตร มอบพละกำลัง 218 แรงม้า และขับขี่ได้ไกลด้วยโหมดไฟฟ้า' },
        { 
        id: 5, 
        image: 'https://www.omodajaecoo.co.th/v2/images/Ultimate-Mint-green-with-black-roof.png', 
        brand: 'OMODA', 
        model: 'C5 EV', 
        price: 899000, 
        description: 'OMODA C5 EV – Crossover SUV ไฟฟ้าขนาดกะทัดรัดจาก Chery มาพร้อมดีไซน์ล้ำสมัย ระบบขับเคลื่อนมอเตอร์ไฟฟ้า และระยะทางขับขี่ที่เหมาะสำหรับการใช้งานในเมือง ราคาเริ่มต้น 899,000 บาท' },
        { 
        id: 6, 
        image: 'https://www.headlightmag.com/hlmwp/wp-content/uploads/2024/11/Sealion7_Exterior-9.jpg', 
        brand: 'BYD', 
        model: 'SEALION 7', 
        price: 1200000, 
        description: 'BYD SEALION 7 – C-SUV ไฟฟ้าสไตล์ Fastback จาก BYD ที่ผสานสมรรถนะสูงและดีไซน์โฉบเฉี่ยว ใช้แพลตฟอร์ม e-Platform 3.0 พร้อมเทคโนโลยีแบตเตอรี่ Blade Battery ให้ระยะทางขับขี่ที่ยาวนาน' },
      
    ],
      car: null,
    };
  },
  created() {
    // ค้นหาข้อมูลของรถที่เลือกตาม id
    const carId = parseInt(this.id);
    this.car = this.cars.find(car => car.id === carId);
  },
};
</script>

<style scoped>

</style>
