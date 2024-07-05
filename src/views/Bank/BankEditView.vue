<template>
    <div class="container">
        <router-link :to="{ name: 'bankIndex' }">Index</router-link>
        <h1>Edit Bank</h1>
        <form @change="formUpdated" @submit.prevent="updateBank" class="form-signin" id="formbank">
            <div class="row">

                <div class="form-group col-md-6">
                    <label for="kode">Kode</label>
                    <input id="kode" type="text" class="form-control" v-model="kolom.kode" placeholder="Kode"
                        autocomplete="off" readonly />
                </div>
                <div class="form-group col-md-6">
                    <label for="nama">nama</label>
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
                        <option value="Konvensional">Konvensional</option>
                        <option value="Syariah">Syariah</option>
                    </select>
                    <div v-if="validation.namaTable" class="mt-2 alert alert-danger">
                        Masukkan Jenis Bank
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="status">Status</label>
                    <select id="status" v-model="selected" class="form-control">
                        <option value="">Please select one</option>
                        <option value="Y">Aktif</option>
                        <option value="N">Tidak Aktif</option>
                    </select>
                    <div v-if="validation.namaTable" class="mt-2 alert alert-danger">
                        Masukkan status Bank
                    </div>
                </div>
            </div>
            <div class="form-group col-md-6">
                <input id="id" type="text" class="form-control" v-model="kolom.id" placeholder="ID" autocomplete="off"
                    readonly hidden/>
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
        </form>


    </div>
</template>
<script>
import axios from 'axios'
import Auth from '@/auth.js'
export default {
    name: 'editBank',
    data() {
        return {
            validation: [],
            kolom: [],
            selected : "",
            token: localStorage.getItem('token')
        }

    },
        mounted() {
        axios.get(process.env.VUE_APP_API_URL + 'api/banks/' + this.$route.params.bankId, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }).then(result => {
            this.kolom.id = result.data.data.id
            this.kolom.kode = result.data.data.kode
            this.kolom.nama = result.data.data.nama 
            this.kolom.jenis = result.data.data.jenis
            this.selected = result.data.data.status
        }).catch((error) => {
            if (error.response.data.errors === "Unauthorized") {
                    // alert(process.env.VUE_APP_EXPIRED)
                    this.$swal(process.env.VUE_APP_EXPIRED);
                    Auth.logout();
                    return this.$router.push({ name: 'login' })
                }
        });
    },
    methods: {
        formUpdated () {
        this.formNotUpdated = false
        },
        updateBank() {
            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: 'http://localhost:3000/api/banks/'+ this.$route.params.bankId,
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
                    this.kolom.status = ''
                })
                .catch((error) => {
                    if (error.response.data.errors === "Unauthorized") {
                    // alert(process.env.VUE_APP_EXPIRED)
                    this.$swal(process.env.VUE_APP_EXPIRED);
                    Auth.logout();
                    return this.$router.push({ name: 'login' })
                }
                    
                });
        }
    },
    
}
</script>