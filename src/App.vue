<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />

  </div>
</template>

<script setup>
import Header from "./components/sections/Header.vue";
import Footer from "./components/sections/Footer.vue"
</script>

<style scoped>
@import "../src/assets/css/bootstrap.min.css";
@import "../src/assets/css/templatemo.css";
@import "../src/assets/css/fontawesome.min.css";
@import "../src/assets/css/custom.css";
</style>
