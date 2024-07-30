<template>
    <div class="container">
        <router-link :to="{ name: 'bankIndex' }">Back</router-link>
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
                    readonly hidden />
            </div>
            <div class="row">
                <div class="form-group col-md-1">
                    <button type="submit" class="btn btn-primary">Update</button>
                </div>
                <div class="form-group col-md-6">
                    <button type="button" @click="batal" class="btn btn-primary">Cancel</button>
                </div>
            </div>
        </form>


    </div>
</template>
<script>
import axios from 'axios'
import Auth from '@/auth.js'
import Swal from 'sweetalert2'
export default {
    name: 'editBank',
    data() {
        return {
            validation: [],
            kolom: [],
            selected: "",
            token: localStorage.getItem('token'),
        }

    },
    mounted() {
        this.formNotUpdated = false
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
                Swal.fire({
                    title: "Unauthorized",
                    text: process.env.VUE_APP_EXPIRED,
                    icon: "error"
                });
                Auth.logout();
                return this.$router.push({ name: 'login' })
            }
        });
    },
    methods: {
        async formUpdated() {
            this.formNotUpdated = true
        },
        batal() {
            if (this.formNotUpdated === false) {
                return this.$router.push({ name: 'bankIndex' })
            }

            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                   this.updateBank()
                } else if (result.isDenied) {
                    return this.$router.push({ name: 'bankIndex' })
                }
            });


        },
        updateBank() {
            // cek jika ada perubahan, akan di simpan
            if (this.formNotUpdated === false) {
                return this.$router.push({ name: 'bankIndex' })
            }
            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: 'http://localhost:3000/api/banks/' + this.$route.params.bankId,
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
                    Swal.fire({
                        title: "Update",
                        text: process.env.VUE_APP_SAVE_UPDATE,
                        icon: "succes"
                    });
                    this.kolom.kode = ''
                    this.kolom.nama = ''
                    this.kolom.jenis = ''
                    this.kolom.status = ''
                    return this.$router.push({ name: 'bankIndex' })
                })
                .catch((error) => {
                    if (error.response.data.errors === "Unauthorized") {
                        Swal.fire({
                            title: "Unauthorized",
                            text: process.env.VUE_APP_EXPIRED,
                            icon: "error"
                        });
                    } else {
                        Swal.fire({
                            title: "Gagal",
                            text: "Simpan Gagal",
                            icon: "error"
                        });
                    }

                });
        }
    },

}
</script>