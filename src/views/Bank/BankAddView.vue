<template>
    <div class="container">
        <h1>Add Bank</h1>
        <form @submit.prevent="createBank" class="form-signin" id="formbank">
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="kode">Kode</label>
                    <input id="kode" type="text" class="form-control" v-model="kolom.kode"
                        placeholder="Kode" autocomplete="off" />
                    <div v-if="validation.namaTable" class="mt-2 alert alert-danger">
                        Masukkan Kode
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="nama">Kode</label>
                    <input id="nama" type="text" class="form-control" v-model="kolom.nama"
                        placeholder="Nama Bank" autocomplete="off" />
                    <div v-if="validation.namaTable" class="mt-2 alert alert-danger">
                        Masukkan Nama Bank
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="form-group col-md-6">
                    <label for="jenis">Jenis</label>
                    <input id="jenis" type="text" class="form-control" v-model="kolom.jenis"
                        placeholder="Jenis" autocomplete="off" />
                    <div v-if="validation.namaTable" class="mt-2 alert alert-danger">
                        Masukkan Jenis Bank
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="status">Status</label>
                    <input id="status" type="text" class="form-control" v-model="kolom.status"
                        placeholder="Status Bank" autocomplete="off" />
                    <div v-if="validation.namaTable" class="mt-2 alert alert-danger">
                        Masukkan status Bank
                    </div>
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Create</button>
        </form>

       
    </div>
</template>
<script>
    import axios from 'axios'
export default {
    name : 'addBank',
    data()  {
        return {
            validation: [],
            kolom: [],
            token: localStorage.getItem('token')
        }

    },
    methods: {
        createBank(){
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:3000/api/banks',
                headers: {
                    'Authorization': this.token
                },
                data:{
                    'kode': this.kolom.kode,
                    'nama': this.kolom.nama,
                    'jenis': this.kolom.jenis,
                    'status': this.kolom.status,
                    
                }
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    alert("Sukses")
                })
                .catch((error) => {
                    alert("Gagal")
                    console.log(error);
                });
        }
    }
}
</script>
<style>
    
</style>