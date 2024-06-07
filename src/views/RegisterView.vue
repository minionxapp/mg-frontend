<template>
    <content-header title="Register"/>
    <div>
        <registerComponen/>
    </div>
</template>

<script>

import registerComponen //2 tidak boleh sama denfan *1
 from '@/components/Login/RegisterComponent.vue'
export default {
    name : "Register", //*1
    components :{
        registerComponen //2 tidak boleh sama denfan *1
    }

}
</script>