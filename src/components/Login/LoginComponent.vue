<template>
  <div class="container">
    <form @submit.prevent="login" class="form-signin" id="formLogin">
      <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72"
        height="72">
      <div class="form-group">
        <label for="email">EMAIL</label>
        <input id="email" type="email" class="form-control" v-model="user.email" placeholder="Masukkan Email" autocomplete="off"/>
        <div v-if="validation.email" class="mt-2 alert alert-danger">
          Masukkan Email
        </div>
      </div>

      <div class="form-group">
        <label for="password">PASSWORD</label>
        <input id="password" type="password" class="form-control" v-model="user.password" placeholder="Masukkan Password" autocomplete="off" />
        <div v-if="validation.password" class="mt-2 alert alert-danger">
          Masukkan Password
        </div>
      </div>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" id="remenber"> Remember me
        </label>
      </div>
      <button type="submit" class="btn btn-primary">LOGIN</button>
      <p class="mt-5 mb-3 text-muted">&copy; MgProject - 2024</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginComponen',
  data() {
    return {
      validation: [],
      user: []
    }
  },
  methods:{
    login(){
      alert("coba login")

      this.validation = [];

      if (!this.user.email) {
        this.validation.email = true;
      }

      if (!this.user.password) {
        this.validation.password = true;
      }
    }

    

  }
}
</script>



<style>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>