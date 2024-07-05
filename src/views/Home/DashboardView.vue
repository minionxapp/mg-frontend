<template>
  <div class="wrapper">

    <!-- navbar -->
    <Navbar :role="role" />
    <!-- Sidebar -->
    <Sidebar />

    <div class="content-wrapper">
      <router-view />
    </div>

    <footer class="main-footer">
      <div class="float-right d-none d-sm-block">
        <b>Version</b> 3.2.0
      </div>
      <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
    </footer>

    <!-- footer -->
    <aside class="control-sidebar control-sidebar-dark">

    </aside>

  </div>
</template>

<script>
import Navbar from '@/components/Layout/Navbar.vue';
import Sidebar from '@/components/Layout/Sidebar.vue'
export default {
  components: {
    Navbar, Sidebar,
  },

  data() {
    return {
      //state loggedIn with localStorage
      loggedIn: localStorage.getItem('loggedIn'),
      //state token
      token: localStorage.getItem('token'),
      //state user logged In
      user: [],
      role: localStorage.getItem('role'),
    }
  },
  methods: {
    logout() {
      localStorage.setItem("loggedIn", "false")
      return this.$router.push({ name: 'login' })
    }
  },
  mounted() {
    console.log("DASHBOARD mounted : " + this.loggedIn)
    if (this.loggedIn === 'false' || !this.loggedIn) {
      return this.$router.push({ name: 'login' })
    }
  }
}
</script>

<!-- // */<style></style> -->