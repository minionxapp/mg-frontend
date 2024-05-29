<template>
    <div class="login">
        <div class="container" style="margin-top:100px">
            <div class="row justify-content-center">
                <div class="col-md-5">
                    <div v-if="loginFailed" class="alert alert-danger">
                        Email atau Password Anda salah.
                    </div>
                    <div class="card">
                        <div class="card-body">
                            LOGIN
                            <hr>
                            <form @submit.prevent="login">

                                <div class="form-group">
                                    <label for="username">User Name</label>
                                    <input id="username" type="text" class="form-control" v-model="user.username"
                                        placeholder="Masukkan Username">
                                    <div v-if="validation.username" class="mt-2 alert alert-danger">
                                        Masukkan Username
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="password">PASSWORD</label>
                                    <input id="password" type="password" class="form-control" v-model="user.password"
                                        placeholder="Masukkan Password" value="admin">
                                    <div v-if="validation.password" class="mt-2 alert alert-danger">
                                        Masukkan Password
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
        login(){
            
            if (this.user.username && this.user.password) {
                axios.post(process.env.VUE_APP_API_URL+'api/users/login',{
                            username: this.user.username,
                            password: this.user.password
                }).then(res =>{
                    // console.log("resr :"+JSON.stringify(res))
                    // console.log("token :"+res.data.data.token)
                    localStorage.setItem("loggedIn", "true")
                    localStorage.setItem("token", res.data.data.token)
                    // ambil data user

                    axios.get(process.env.VUE_APP_API_URL+'api/users/current',{
                        headers: {
                        'Authorization': localStorage.getItem('token')
                        } 
                    }).then(result =>{
                        // console.log("============="+JSON.stringify(result))
                        localStorage.setItem("name", result.data.data.name)
                    })

                    return this.$router.push({ name: 'dashboard' })
                })
                .catch((error) => {
                    localStorage.setItem("loggedIn", "false")
                    // /* console.log("^^^^^^^^^^ "+error);
                    alert('error invalid user & password !!!',error.response)   
                    return this.$router.push({ name: 'login' })                 
                })
                
            }
        }
    },
   
}
</script>