<script>

import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import ProjectPage from '../pages/ProjectPage.vue';
import ContactPage from '../pages/ContactPage.vue';

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
	<!-- <div id="content"> -->
        <!-- <Navbar /> -->
        <br>
        <nav id="navbar">
        	<a href="#/">Home</a> | 
        	<a href="#/about">About</a> | 
        	<a href="#/projects">Project</a> | 
        	<a href="#/contact">Contact</a>
        </nav>
        <br>
        <component :is="currentView" />
    <!-- </div> -->
</template>

<style scoped>
#navbar{
	border: 1px solid lightgray;
	border-radius: 20px;
	margin: 0px 10px 10px 10px;
	padding-bottom: 20px;
}

a{
    font-size: 22px;
	color: black;
}

a:hover{
    color: darkgray;
}
</style>
