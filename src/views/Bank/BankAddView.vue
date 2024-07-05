<template>
    <div class="container">
        <router-link to="bank">Index</router-link>
        <h1>Add Bank</h1>
        <form @submit.prevent="createBank" class="form-signin" id="formbank">
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="kode">Kode</label>
                    <input id="kode" type="text" class="form-control" v-model="kolom.kode" placeholder="Kode"
                        autocomplete="off" />
                    <div v-if="validation.namaTable" class="mt-2 alert alert-danger">
                        Masukkan Kode
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="nama">Kode</label>
                    <input id="nama" type="text" class="form-control" v-model="kolom.nama" placeholder="Nama Bank"
                        autocomplete="off" />
                    <div v-if="validation.namaTable" class="mt-2 alert alert-danger">
                        Masukkan Nama Bank
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="form-group col-md-6">
                    <label for="jenis">Jenis</label>
                    <select id="jenis" v-model="kolom.jenis" class="form-control">
                        <option>Konvensional</option>
                        <option>Syariah</option>
                    </select>
                    <div v-if="validation.namaTable" class="mt-2 alert alert-danger">
                        Masukkan Jenis Bank
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="status">Status</label>                    
                    <select  id="status" v-model="selected" class="form-control" >  
                        <option  value="">Please select one</option>                        
                            <option selected value="Y">Aktif</option>
                            <option value="N">Tidak Aktif</option>
                        </select>
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
    name: 'addBank',
    data() {
        return {
            validation: [],
            kolom: [],
            selected : "",
            token: localStorage.getItem('token')
        }

    },
    methods: {
        createBank() {
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:3000/api/banks',
                headers: {
                    'Authorization': this.token
                },
                data: {
                    'kode': this.kolom.kode,
                    'nama': this.kolom.nama,
                    'jenis': this.kolom.jenis,
                    'status': this.selected,

                }
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    alert("Sukses")
                    this.kolom.kode = ''
                    this.kolom.nama = ''
                    this.kolom.jenis = ''
                    this.selected = ''
                })
                .catch((error) => {
                    alert(error.response.data.errors)
                });
        }
    }
}
</script>