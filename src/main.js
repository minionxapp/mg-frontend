import "bootstrap/dist/css/bootstrap.css"



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ContentHeader from './components/Layout/ContentHeader.vue';
import Content from './components/Layout/Content.vue'

const app = createApp(App)
app.component('content-header',ContentHeader)
.component('content',Content)
.use(store).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.js"
