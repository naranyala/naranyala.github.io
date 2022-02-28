<script setup>

import Header from './layouts/Header.vue'
import Footer from './layouts/Footer.vue'
// import Navbar from './components/Navbar.vue'
import HomePage from './components/HomePage.vue'
// import AboutPage from './components/AboutPage.vue'

</script>

<template>
  <Header />
  <!-- <Navbar /> -->
  <h2>Halo 🖐 </h2>
  <HomePage msg="Selamat Datang" />

  <Footer />
  <!-- <AboutPage /> -->
</template>

<style>
#app {
  background: rgb(220, 235, 255);
  /* height: auto; */
  margin-bottom: auto;
  font-family: 'Work Sans';
  text-align: center;
  border: 1px solid lightgray;
  border-radius: 20px;
  padding: 20px;
}
</style>
