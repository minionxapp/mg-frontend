<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="#" class="brand-link">
            <img src="/adminlte/dist/img/AdminLTELogo.png" alt="AdminLTE Logo"
                class="brand-image img-circle elevation-3" style="opacity: .8">
            <span class="brand-text font-weight-light text-left">MgProject</span>
        </a>
        <div class="sidebar text-left">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="/adminlte/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="">
                </div>
                <div class="info">
                    <span class="text-light">{{ userName }}</span><br>
                    <span class="text-light">{{ role }}</span>
                </div>
                
            </div>
            <div class="form-inline">
                <div class="input-group" data-widget="sidebar-search">
                    <input class="form-control form-control-sidebar" type="search" placeholder="Search"
                        aria-label="Search">
                    <div class="input-group-append">
                        <button class="btn btn-sidebar">
                            <i class="fas fa-search fa-fw"></i>
                        </button>
                    </div>
                </div>
            </div>
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" data-accordion="false">
                    <NavItem icon="fas fa-home" link="/">Home</NavItem>
                    <NavItem icon="fas fa-info-circle" link="/about">About</NavItem>
                    <NavItem icon="fas fa-home" link="/register">Register</NavItem>
                    <NavItem icon="fa fa-bicycle" link="/logout">Logout</NavItem>
                    <NavItem v-if="['user1','admin'].includes(role)" icon="fa fa-calculator" link="/table/index">Table</NavItem>


                    <li v-if="['user','admin'].includes(role)" class="nav-item menu-is-opening menu-open">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-chart-pie"></i>
                            <p>
                                Setup
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview" style="display: block;">
                            <NavItem icon="fa fa-calculator" link="/bank">Bank</NavItem>
                            <NavItem v-if="['user','admin'].includes(role)" icon="fa fa-calculator" link="/table/index">Table</NavItem>
                            <!-- Aselinya -->
                            <li class="nav-item">
                                <a href="pages/charts/chartjs.html" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>ChartJS</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="pages/charts/flot.html" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Flot</p>
                                </a>
                            </li>


                          
                        </ul>
                    </li>
                </ul>
            </nav>

        </div>

    </aside>

</template>

<script>
import NavItem from '@/components/Layout/NavItem.vue'

export default {
    data() {
        return {
            //state loggedIn with localStorage
            loggedIn: localStorage.getItem('loggedIn'),
            //state token
            token: localStorage.getItem('token'),
            //state user
            userName: localStorage.getItem('userName'),
            role: localStorage.getItem('role'),
            //state validation
            validation: [],
            //state login failed
            loginFailed: null
        }
    },
    components: {
        NavItem //penamaan berpengaruh lihat <nav-item>.......
    }

}
</script>