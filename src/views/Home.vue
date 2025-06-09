<template>
  <section class="hero-section d-flex flex-column align-center justify-center text-center">
    <h1 class="display-2 font-weight-bold mb-4">美观的 Vue 3 + Vuetify 模板</h1>
    <p class="subtitle-1 mb-6">现代化、响应式、优雅的前端起步模板，助力高效开发</p>
    <v-btn color="primary" size="large" class="elevation-2" href="https://vuetifyjs.com/zh-Hans/" target="_blank">了解 Vuetify</v-btn>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero-section {
  min-height: 60vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
.dark .hero-section {
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
}
</style>
