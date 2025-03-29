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
          <option value="2000000+">มากกว่า 2,000,000</option>
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
      brands: ['Toyota', 'Honda', 'Nissan', 'BMW', 'Mercedes'],
      models: {
        Toyota: ['Corolla', 'Civic'],
        Honda: ['Civic', 'Accord'],
        Nissan: ['Altima', 'Maxima'],
        BMW: ['X5', 'X6'],
        Mercedes: ['G-Class', 'A-Class'],
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
