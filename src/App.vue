<script setup>
import Header from './layouts/Header.vue'
import Navbar from './layouts/Navbar.vue'
import Content from './layouts/Content.vue'
import Footer from './layouts/Footer.vue'
</script>

<template>
  <div>
    <Header />
    <Navbar />
    <Content />
    <Footer />
  </div>
</template>

<style>
html{
  background: #2e3440;
  color: white;
}

#app {
  /* background: white; */
  color: white;
  margin: 20px 25%;
  height: 100%;
  font-family: 'Work Sans';
  text-align: center;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 20px;
}

table{
  width: 100%;
}

table, tr, td{
  border: 1px solid gray;
  border-collapse: collapse;
}

#content{
  border: 1px solid gray;
  border-radius: 20px;
  margin: 10px;
  padding: 20px;
  color: white;
}

#content h1{
  font-weight: bold;
  color: white;
}
</style>
