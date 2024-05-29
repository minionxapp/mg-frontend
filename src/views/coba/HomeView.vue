<template>
    <div class="home">
        <div class="jumbotron">
            <div class="container">
                <h1 class="display-3">Mg Project</h1>
                <p>Belajar Membuat Authentication dengan menggunakan vue</p>
                <button type="button" class="btn btn-primary" @click="login()">Login</button>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'Home',

    methods:{
        login(){
            return this.$router.push({ name: 'login' })
        }
    }
}
</script>