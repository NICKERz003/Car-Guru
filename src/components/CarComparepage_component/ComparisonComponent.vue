<template>
  <section class="compare-cars">
    <h2>Car Comparison</h2>
    <div class="car-selection">
      <div class="car-card" v-for="(car, index) in selectedCars" :key="index">
            <img :src="car.image" alt="Car" />
            <strong>{{ car.brand }} | {{ car.model }}</strong>
            <strong>฿ {{car.price}}</strong>
            <button @click="removeCar(index)" class="remove-car-btn">Remove</button>
      </div>
      <div v-if="selectedCars.length < 3" class="car-card empty" @click="openModal">
        <span>+</span>
        <p>Select Car</p>
      </div>
    </div>


    <!-- Reset Button -->
    <button @click="resetComparison" class="reset-btn">
      Reset
    </button>

    <!-- Modal for Selecting Cars -->
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <!-- ปุ่มปิดหน้าต่าง -->
        <button @click="closeModal" class="close-btn">X</button>
        <h3>Select Brand and Model</h3>
        <div>
          <select v-model="selectedBrand" @change="filterModels">
            <option disabled value="">Select Brand</option>
            <option v-for="brand in brands" :key="brand" :value="brand">{{ brand }}</option>
          </select>

          <select v-model="selectedModel" :disabled="!selectedBrand">
            <option disabled value="">Select Model</option>
            <option v-for="model in filteredModels" :key="model" :value="model">{{ model }}</option>
          </select>
        </div>

        <button @click="addCar" :disabled="!selectedModel" class="add-car-btn">
          Add Car
        </button>
      </div>
    </div>

<div  class="comparison-table">
    <h3>รายละเอียดเบื้องต้น</h3>
    <div class="Detail_table">
      <table style="width:22%" v-for="car in selectedCars" :key="car.id">
        <tr>
          <td>
           <span >แบรนด์</span>
            <h4 >{{ car.brand }}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <span>ประเภท</span>
            <h4>{{ car.type}}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <span>ราคา</span>
            <h4>฿ {{car.price}}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <span>ปีที่เปิดตัว</span>
            <h4>{{car.year}}</h4>
          </td>
        </tr>
      </table>

    </div>

    <h3>จุดเด่น</h3>
    <div class="Detail_table">
       <table style="width:22%" v-for="car in selectedCars" :key="car.id">
        <tr>
          <td>
            {{car.advantages}}
          </td>
        </tr>
      </table>

    </div>

    <h3>สเปค</h3>
    <div class="Detail_table" >
      <table style="width:22%" v-for="car in selectedCars" :key="car.id">
        <tr>
          <td>
           <span>เครื่องยนต์</span>
            <h4>{{car.engine}}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <span>ขนาดเครื่องยนต์</span>
            <h4>{{car.cc}}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <span>กำลังเครื่องยนต์ (แรงม้า)</span>
            <h4>{{car.engine_power}}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <span>ระบบเกียร์</span>
            <h4>{{car.gear_system}}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <span>รูปแบบเกียร์</span>
            <h4>{{car.gear_form}}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <span>ประเภทน้ำมันเชื้อเพลิง</span>
            <h4>{{car.Fuel_type}}</h4>
          </td>
        </tr>
      </table>

    </div>

    <h3>ดีไซน์</h3>
    <div class="Detail_table" >
      <table style="width:22%" v-for="car in selectedCars" :key="car.id">
        <tr>
          <td>
            <p>ภายใน:</p>{{car.interior_design }}
            <p>ภายนอก:</p>{{car.exterior_design }}

          </td>
        </tr>
      </table>
    </div>

    <h3>ระบบความปลอดภัย</h3>
    <div class="Detail_table" >
      <table style="width:22%" v-for="car in selectedCars" :key="car.id">
        <tr>
          <td>
            {{car.security }}
          </td>
        </tr>
      </table>
    </div>
</div>
  </section>
</template>

<script>
import axios from 'axios'; // เพิ่มการนำเข้า axios ที่นี่
export default {
  name: 'ComparisonComponent',
  // props: {
  //   cars: { 
  //     type: Array, 
  //     required: true 
  //   }
  // },
  data() {
    return {
      selectedCars: [],  // รถที่เลือก
      selectedBrand: '',
      selectedModel: '',
      brands: ['Toyota', 'Honda', 'Nissan', 'BMW', 'MercedesBenz'
        ,'Isuzu','Ford','MG','Mazda','GWM','Suzuki','Porsche','Audi','Ferrari','Mitsubishi'
      ],
      models: {
        Toyota: ['Corolla', 'Camry','Hilux','Fortuner','Vios','Yaris','Land Cruiser','RAV4','Sienna','Aqua'],
        Honda: ['Civic', 'Accord','CR-V','HR-V','Jazz','Brio','Pilot','Odyssey','Insight','Elysion'],
        Nissan: ['Altima', 'Maxima','Rogue','X-Trail','Juke','Leaf','Navara','Pathfinder','Murano','370Z'],
        BMW: ['X5', 'X6','M4','M3','7 Series','Z4','X3','5 Series','i8','M2'],
        MercedesBenz: ['G-Class', 'A-Class','E-Class','S-Class','GLC','GLE','AMG GT','CLA-Class','G-Class','SL-Class'],
        Isuzu:['D-Max','MU-X','V-Cross','TFR','N-Series','Giga','F-Series','Civic','Panther','D-MAX X',],
        Ford:['Focus','Mustang','F-150','Escape','Explorer','Edge','Ranger','Fiesta','Tourneo','Kuga',],
        MG:['MG5','MG ZS','MG HS','MG3','MG Hector','MG6','MG RX5','MG6 Plus','MG5 EV','MG ZS EV',],
        Mazda:['Mazda3','Mazda6','CX-5','CX-3','Mazda2','MX-5','Mazda3 Hatchback','CX-9','Mazda6 Wagon','Mazda CX-50',],
        GWM:['P-Series','Haval H6','Haval F7','P-Series EV','Haval Jolion','Great Wall Steed','Haval H9','Haval F5','Haval M6','Haval E2',],
        Suzuki:['Swift','Jimny','Vitara','Celerio','Baleno','Alto','S-Cross','Ertiga','SX4 S-Cross','Grand Vitara',],
        Porsche:['911','Cayenne','Macan','Panamera','Taycan','718 Cayman','718 Boxster','911 Turbo','911 Carrera','Cayenne Coupe',],
        Audi:['A3','A4','Q5','Q7','Q8','A6','A8','S3','R8','TT',],
        Ferrari:['488 GTB','812 Superfast','Portofino','F8 Tributo','LaFerrari','GTC4Lusso','California T','Roma','	F12 Berlinetta','488 Pista',],
        Mitsubishi:['Triton','Pajero Sport','Outlander','Montero','Mirage','Lancer','ASX','Delica','Expander','Eclipse Cross',],
      },
      filteredModels: [],  // รุ่นที่กรองแล้ว
      isModalOpen: false,
      showComparisonTable: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    filterModels() {
      // ตรวจสอบว่า selectedBrand มีค่าและอยู่ใน models
    if (this.selectedBrand && this.models[this.selectedBrand]) {
      this.filteredModels = this.models[this.selectedBrand]; // ถ้าเลือกแบรนด์ที่มีใน models
    } else {
      this.filteredModels = []; // ถ้าไม่มีการเลือกหรือเลือกแบรนด์ที่ไม่มีใน models
    }
    },
    addCar() {
      
      if (!this.selectedBrand || !this.selectedModel) {
        alert("กรุณาเลือกแบรนด์และรุ่นของรถ");
        return;
      }

      // ส่งคำขอไปที่ Backend เพื่อดึงข้อมูลของรถที่เลือก
      axios.get('http://localhost:8000/cars/models', {
        params: {
          brand: this.selectedBrand,
          model: this.selectedModel
        }
      })
      .then(response => {
        if (response.data && response.data.length > 0) {
          const carData = response.data[0];  // สมมติว่า Backend ส่งข้อมูลรถในรูปแบบของ array และเลือกข้อมูลแรก

          // สร้างข้อมูลใหม่สำหรับรถยนต์จากข้อมูลที่ได้จาก Backend
          const newCar = {
            brand: this.selectedBrand,
            model: this.selectedModel,
            price: carData.price,  // ดึงข้อมูลราคา
            year: carData.year,  // ดึงข้อมูลปี
            type: carData.type,  // ประเภท
            advantages: carData.advantages,  // จุดเด่น
            engine: carData.engine,  // เครื่องยนต์
            cc: carData.cc,  // ขนาดเครื่องยนต์
            engine_power: carData.engine_power,  // กำลังเครื่องยนต์
            gear_system: carData.gear_system,  // ระบบเกียร์
            gear_form: carData.gear_form,  // รูปแบบเกียร์
            Fuel_type: carData.fuel_type,  // ประเภทน้ำมัน
            interior_design: carData.interior_design,  // ดีไซน์ภายใน
            exterior_design: carData.exterior_design,  // ดีไซน์ภายนอก
            security: carData.security,  // ระบบความปลอดภัย
            image: carData.image_url,  // ใช้ URL ของภาพจากข้อมูล
            id: this.selectedCars.length + 1
          };

          if (this.selectedCars.length < 3) {
            this.selectedCars.push(newCar);  // เพิ่มรถในรายการที่เลือก
            this.$emit('updateSelectedCars', this.selectedCars); // ส่งข้อมูลกลับไปยัง parent component
          }
          this.selectedBrand = '';  // รีเซ็ตการเลือกแบรนด์
          this.selectedModel = '';  // รีเซ็ตการเลือกรุ่น
          this.closeModal();  // ปิด modal
        } else {
          alert('ไม่พบข้อมูลรถยนต์ที่เลือก');
        }
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
        alert('ไม่สามารถดึงข้อมูลรถยนต์ได้');
      });
    },
    removeCar(index) {
      this.selectedCars.splice(index, 1);
    },
    compareCars() {
      if (this.selectedCars.length < 2) {
        alert("กรุณาเลือกอย่างน้อย 2 คัน!");
        return;
      }
      
      const carIds = this.selectedCars.map(car => car.id);  // ดึง ID ของรถที่เลือก

      // ส่งคำขอไปที่ Backend เพื่อดึงข้อมูลการเปรียบเทียบ
      axios.get('http://localhost:8000/cars/compare', {
        params: { ids: carIds.join(',') }
      })
         .then(response => {
          if (response.data && response.data.length > 0) {
      // รวมข้อมูลจาก API เข้ากับข้อมูลเดิม โดยไม่เปลี่ยนแบรนด์, ชื่อ และรูป
      this.selectedCars = this.selectedCars.map(car => {
        const updatedCar = response.data.find(c => c.id === car.id);
        if (updatedCar) {
            return {
              ...car,
              price: updatedCar.price,
              year: updatedCar.year,
              type: updatedCar.type,
              advantages: updatedCar.advantages,
              engine: updatedCar.engine,
              cc: updatedCar.cc,
              engine_power: updatedCar.engine_power,
              gear_system: updatedCar.gear_system,
              gear_form: updatedCar.gear_form,
              Fuel_type: updatedCar.fuel_type,
              interior_design: updatedCar.interior_design,
              exterior_design: updatedCar.exterior_design,
              security: updatedCar.security
            };
          }
          return car;
      });
    }
      this.showComparisonTable = true;
    })
        .catch(error => {
          console.error('Error comparing cars:', error);
          alert('เกิดข้อผิดพลาดในการเปรียบเทียบ');
        });

    },
    resetComparison() {
      this.selectedCars = [];
      this.showComparisonTable = false;  // รีเซ็ตการแสดงตาราง
    }
  }
};

</script>

<style scoped>

img {
  max-height: 150px;
}

.Detail_table {
  width: 80%;
  display: flex;
  justify-content: center;
  margin: auto;
}

.compare-cars {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.car-selection {
  height: 330px;
  display: flex;
  gap: 10px;
  justify-content: center;
}

.car-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.car-card:hover {
  transform: scale(1.05);
}

.car-card.empty {
  max-width: 250px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #f0f0f0;
}

.remove-car-btn {
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
}

.remove-car-btn:hover {
  background-color: darkred;
}

.compare-btn {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: green;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
}

.compare-btn:disabled {
  background-color: gray;
  cursor: not-allowed;
}

.compare-btn:hover {
  background-color: darkgreen;
}

.reset-btn {
  display: block; 
  margin: 25px auto;
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
}

.reset-btn:hover {
  background-color: darkred;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.add-car-btn {
  width: 100%;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #45a049;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

select {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
}

.comparison-table {
  width: 90%;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.comparison-table h3 {
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.5rem;
  color: #333;
}

.Detail_table {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.Detail_table table {
  width: 48%;
  border-collapse: collapse;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}
.Detail_table table tr {
  background-color: #fff;
}

.Detail_table table tr:nth-child(even) {
  background-color: #f1f1f1;
}

.Detail_table table th,
.Detail_table table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 1rem;
}

.Detail_table table th {
  background-color: #4CAF50; /* Green background */
  color: white;
  font-weight: bold;
}

.Detail_table table td {
  color: #555;
}

.Detail_table table tr td span {
  font-weight: bold;
  color: #333;
}

.Detail_table table tr td h4 {
  margin: 5px 0 0;
  font-size: 1.1rem;
  color: #000;
}

@media (max-width: 768px) {
  .Detail_table table {
    width: 100%;
  }

  .comparison-table {
    width: 95%;
  }
}
</style>
