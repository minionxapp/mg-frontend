<template>
    <div class="login">
        <div class="container" style="margin-top:100px">
            <div class="row justify-content-center">
                <div class="col-md-5">
                    <div v-if="loginFailed" class="alert alert-danger">
                        Username atau Password Anda salah {{ loginFailed }}X.
                    </div>
                    <div class="card">
                        <div class="card-body">
                            LOGIN XX
                            <hr>
                            <form @submit.prevent="login">

                                <div class="form-group">
                                    <label for="username">User Name</label>
                                    <input id="username" type="text" class="form-control" v-model="user.username"
                                        placeholder="Masukkan Username">
                                    <div v-if="validation.username" class="mt-2 alert alert-danger">
                                        Username tidak boleh kosong !!!!
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="password">PASSWORD</label>
                                    <input id="password" type="password" class="form-control" v-model="user.password"
                                        placeholder="Masukkan Password" value="admin">
                                    <div v-if="validation.password" class="mt-2 alert alert-danger">
                                        Password tidak boleh kosong !!!!
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary my-3">LOGIN</button>

                            </form>
                            <p class="mb-1">
                                <a href="forgot-password.html">I forgot my password</a>
                            </p>
                            <p class="mb-0">
                                <a href="register" class="text-center">Register a new membership</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',

    data() {
        return {
            //state loggedIn with localStorage
            loggedIn: localStorage.getItem('loggedIn'),
            //state token
            token: localStorage.getItem('token'),
            //state user
            user: [],
            //state validation
            validation: [],
            //state login failed
            loginFailed: null
        }
    },
    methods: {
        async login() {
            if (this.user.username && this.user.password) {
                await axios.post(process.env.VUE_APP_API_URL + 'api/users/login', {
                    username: this.user.username,
                    password: this.user.password
                }).then(async res => {
                    localStorage.setItem("loggedIn", "true")
                    localStorage.setItem("token", res.data.data.token)
                    // ambil data user
                     await axios.get(process.env.VUE_APP_API_URL + 'api/users/current', {
                        headers: {
                            'Authorization': localStorage.getItem('token')
                        }
                    }).then(result => {
                        this.loginFailed = 0;
                        localStorage.setItem("userName", result.data.data.name)
                    })

                    return this.$router.push({ name: 'dashboard' })
                })
                    .catch((error) => {
                        this.loginFailed = this.loginFailed + 1
                        localStorage.setItem("loggedIn", "false")
                        alert('Username atau Password Anda salah ', error.response)
                        return this.$router.push({ name: 'login' })
                    })

            }
            this.validation.username =null  
            if (!this.user.username) {
                this.validation.username = "error"
            }  
            this.validation.password=null
            if (!this.user.password) {
                this.validation.password = "error"
            }
            
            if (!this.user.password || !this.user.username){
                this.loginFailed = this.loginFailed + 1
            }

            if (this.loginFailed == 3) {
                alert("user blocked")
            }
        }
    },

}
</script>