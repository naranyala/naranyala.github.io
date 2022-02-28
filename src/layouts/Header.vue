<script>
// import Navbar from './Navbar.vue'

import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import ProjectPage from '../components/ProjectPage.vue';
import ContactPage from '../components/ContactPage.vue';

const routes = {
    '/': HomePage,
    '/about': AboutPage,
    '/projects': ProjectPage,
    '/contact': ContactPage
};

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
          this.currentPath = window.location.hash
        })
  }
}
</script>

<template>
    <div id="header">
        <!-- <Navbar /> -->
        <a href="#/">Home</a> | 
        <a href="#/about">About</a> | 
        <a href="#/projects">Project</a> | 
        <a href="#/contact">Contact</a>
        <component :is="currentView" />
    </div>
</template>

<style scoped>
#header{
    margin-bottom: 50px;
    border: 1px solid lightgray;
    border-radius: 20px;
    padding: 20px;
}
</style>