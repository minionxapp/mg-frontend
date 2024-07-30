import "bootstrap/dist/css/bootstrap.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ContentHeader from './components/Layout/ContentHeader.vue';
import Content from './components/Layout/Content.vue'

import VueSweetalert2 from 'vue-sweetalert2';
//* import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)
app.component('content-header',ContentHeader)
.component('content',Content)
// .use(VueSweetalert2)
.use(store).use(router).mount('#app')
import "bootstrap/dist/js/bootstrap.js"
