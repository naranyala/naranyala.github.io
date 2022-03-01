<script>

import HomePage from '../pages/Home.vue';
import AboutPage from '../pages/About.vue';
import ProjectPage from '../pages/Projects.vue';
import ContactPage from '../pages/Contact.vue';

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
        	<a href="#/" class="uk-link-reset">Home</a> <span>|</span> 
        	<a href="#/about" class="uk-link-reset">About</a> <span>|</span> 
        	<a href="#/projects" class="uk-link-reset">Project</a> <span>|</span> 
        	<a href="#/contact" class="uk-link-reset">Contact</a>
        </nav>
        <br>
        <component :is="currentView" />
    <!-- </div> -->
</template>

<style scoped>
#navbar{
	border: 1px solid gray;
	border-radius: 20px;
	margin: -10px 10px -10px 10px;
	padding: 15px 0px 20px 0px;
}

a{
  font-size: 22px;
	color: white;
  text-decoration: white;
}

a:hover{
    color: gray;
}

span{
  font-size: 20px;
  margin: 15px;
}
</style>
