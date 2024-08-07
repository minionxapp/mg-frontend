import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/Home/HomeView.vue'
import LoginView  from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import( '../views/HomeView.vue')
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: function(){
      return import('@/views/Logout.vue')
    }
  },
  
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
 
  {
    path: '/dashboard',
    name: 'dashboard',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Home/DashboardView.vue')
    },
    children:[
      {
        path: '/about',
        name: 'about',
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/Home/AboutView.vue')
        }
      },
      {
        path: '/register',
        name: 'register',
        component: function () {
          return import('../views/RegisterView.vue')
        }
      },
      {
        path: '/table',
        name: 'tableAdd',
        component: function () {
          return import('../views/TableView.vue')
        }
      },
      {
        path: '/table/index',
        name: 'tableindex',
        component: function () {
          return import('../views/Table/index.vue')
        }
      },
      {
        path: '/bank',
        name: 'bankIndex',
        component: function () {
          return import('../views/Bank/BankIndexView.vue')
        }
      },
      {
        path: '/bankAdd',
        name: 'bankAdd',
        component: function () {
          return import('../views/Bank/BankAddView.vue')
        }
      },
      {
        path: '/bankEdit/:bankId',
        name: 'bankEdit',
        component: function () {
          return import('../views/Bank/BankEditView.vue')
        }
      },
    ]

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
