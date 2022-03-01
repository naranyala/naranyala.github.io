// import { createPinia } from 'pinia'
import { createApp } from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'
import AppLayout from './layouts/AppLayout.vue'

createApp(App)
	// .use(createPinia())
	.mount('#app')
	// .component('AppLayout', AppLayout)
