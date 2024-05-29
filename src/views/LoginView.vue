<template>
    <div>
        <LoginComponent />
    </div>
</template>

<script>
//** */ import LoginComponent from '@/components/Login/LoginComponent.vue';
import LoginComponent from '@/components/Login2Componen.vue'
export default {
    name : "Login", //*1
    components :{
        LoginComponent //2 tidak boleh sama denfan *1
    }
    ,
     //** */ check user already logged in
     mounted() {
        if (localStorage.getItem('loggedIn')==='true') {
            return this.$router.push({ name: 'dashboard' })
        }
    }
}
</script>