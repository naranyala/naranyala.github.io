<script setup>

import Header from './layouts/Header.vue'
import Navbar from './layouts/Navbar.vue'
import Content from './layouts/Content.vue'
import Footer from './layouts/Footer.vue'
// import Navbar from './components/Navbar.vue'
// import HomePage from './components/HomePage.vue'
// import AboutPage from './components/AboutPage.vue'

</script>

<template>
  <Header />
  <Navbar />
  <Content />
  <!-- <HomePage msg="Selamat Datang" /> -->

  <Footer />
</template>

<style>
#app {
  background: white;
  color: black;
  margin: 0;
  height: 100%;
  /* height: 100vh; */
  margin-bottom: auto;
  font-family: 'Work Sans';
  text-align: center;
  border: 1px solid lightgray;
  border-radius: 20px;
  padding: 20px;
}

table{
  width: 100%;
}

table, tr, td{
  border: 1px solid darkgray;
  border-collapse: collapse;
}

</style>
