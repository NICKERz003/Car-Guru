<template>
  <div>
    <Advertising_space />
    <Content />
  </div>
</template>

<script>
import Advertising_space from './Advertising_space.vue';
import Content from './Content.vue';

export default {
  name: 'HomePage',
  components: {
    Advertising_space,
    Content
  }
};
</script>
