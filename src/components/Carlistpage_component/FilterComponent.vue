<template>
  <div class="filter-container">
    <h2>ค้นหารถยนต์ด้วยการกรองข้อมูล</h2>
    <form @submit.prevent="applyFilters">
      <div class="filter-group">
        <label for="brand">เลือกแบรนด์:</label>
        <select v-model="selectedBrand" id="brand" @change="onBrandChange">
          <option value="" disabled>เลือกแบรนด์</option>
          <option v-for="brand in brands" :key="brand" :value="brand">{{ brand }}</option>
        </select>
      </div>

      <div class="filter-group" v-if="selectedBrand">
        <label for="model">เลือกรุ่น:</label>
        <select v-model="selectedModel" id="model" :disabled="!selectedBrand">
          <option value="" disabled>เลือกรุ่น</option>
          <option v-for="model in filteredModels" :key="model" :value="model">{{ model }}</option>
        </select>
      </div>

      <div class="filter-group">
        <label for="price">เลือกช่วงราคา:</label>
        <select v-model="selectedPrice" id="price">
          <option value="0-500000">0 - 500,000</option>
          <option value="500000-1000000">500,000 - 1,000,000</option>
          <option value="1000000-2000000">1,000,000 - 2,000,000</option>
          <option value="2000000-3000000">2,000,000 - 3,000,000</option>
          <option value="3000000-4000000">3,000,000 - 4,000,000</option>
          <option value="4000000-5000000">4,000,000 - 5,000,000</option>
          <option value="5000000-6000000">5,000,000 - 6,000,000</option>
          <option value="6000000-7000000">6,000,000 - 7,000,000</option>
          <option value="7000000-">มากกว่า 7,000,000</option>
        </select>
      </div>

      <button type="submit" class="filter-button">กรองข้อมูล</button>
      <button @click="resetFilters" type="button" class="reset-button">รีเซ็ต</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brands: ['Toyota', 'Honda', 'Nissan', 'BMW', 'MercedesBenz'
        ,'Isuzu','Ford','MG','Mazda','GWM','Suzuki','Porsche','Audi','Ferrari','Mitsubishi'
      ],
      models: {
        Toyota: ['Corolla', 'Camry','Hilux','Fortuner','Vios','Yaris','Land Cruiser','RAV4','Sienna','Aqua'],
        Honda: ['Civic', 'Accord','CR-V','HR-V','Jazz','Brio','Pilot','Odyssey','Insight','Elysion'],
        Nissan: ['Altima', 'Maxima','Rogue','X-Trail','Juke','Leaf','Navara','Pathfinder','Murano','370Z'],
        BMW: ['X5', 'X6','M4','M3','7 Series','Z4','X3','5 Series','i8','M2'],
        MercedesBenz: ['C-Class', 'A-Class','E-Class','S-Class','GLC','GLE','AMG GT','CLA-Class','G-Class','SL-Class'],
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
      selectedBrand: '',
      selectedModel: '',
      selectedPrice: '',
      filteredModels: [],
    };
  },
  methods: {
    onBrandChange() {
      this.filteredModels = this.models[this.selectedBrand] || [];
      this.selectedModel = ''; // Reset selected model when brand changes
    },
    applyFilters() {
      this.$emit('apply-filters', {
        brand: this.selectedBrand,
        model: this.selectedModel,
        price: this.selectedPrice,
      });
    },
    resetFilters() {
      this.selectedBrand = '';
      this.selectedModel = '';
      this.selectedPrice = '';
      this.$emit('reset-filters');
    },
  },
};
</script>

<style scoped>
.filter-container {
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
  margin-top: 10px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.filter-group {
  margin-bottom: 12px;
}

label {
  font-weight: bold;
}

select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

select:disabled {
  background-color: #f0f0f0;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #45a049;
}

.reset-button {
  background-color: #f44336;
  margin-left: 10px;
}

.reset-button:hover {
  background-color: #e53935;
}
</style>
