<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h1>Table List</h1>
            </div>
            <div class="col-md-6">

                <div class="input-group input-group-lg">
                    <input type="search" class="form-control form-control-lg" placeholder="Type your keywords here"
                        value="Lorem ipsum" v-model="cari.kata">
                    <div class="input-group-append">
                        <button type="submit" class="btn btn-lg btn-default" @click="retrieve()">
                            <i class="fa fa-search"></i>
                        </button>
                        <button type="submit" class="btn btn-lg btn-default" @click="add()">
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Bordered Table</h3>
            </div>

            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th style="width: 10px">#</th>
                            <th>Nama Table</th>
                            <th>Nama Kolom</th>
                            <th style="width: 40px">Panjang</th>
                        </tr>
                    </thead>
                    <tbody v-for="(item, index) in tables" :key="index">
                        <tr>
                            <td>{{ incrementIndex(index) }}</td>
                            <td>{{ item.namaTable }}</td>
                            <td>{{ item.namaKolom }} </td>

                            <td><span class="badge bg-danger">{{ item.panjang }}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="card-footer clearfix">
                <ul class="pagination pagination-sm m-0 float-right">
                    <li class="page-item"><a class="page-link" href="#">«</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">»</a></li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'indexTable',
    data() {
        return {
            validation: [],
            tables: [],
            cari: [],
            nomor: [],
            token: localStorage.getItem('token')
        }
    },
    methods: {
        getTables() {
            axios.get(process.env.VUE_APP_API_URL + 'api/users/current', {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }).then(result => {
                this.loginFailed = 0;
                localStorage.setItem("name", result.data.data.name)
            })

            return this.$router.push({ name: 'dashboard' })
        },
        retrieve() {
            this.nomor.urut = 0;
            if (this.cari.kata) {
                axios.get(process.env.VUE_APP_API_URL + 'api/tablesx/' + this.cari.kata, {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                }).then(result => {
                    console.log(JSON.stringify(result))
                    this.tables = result.data.data
                })
            } else {
                alert("Masukan Nama Table .............!!!")

            }
        },
        incrementIndex(key) {
            return key + 1;
        },
        add() {
            return this.$router.push({ name: 'tableAdd' })
        }
    }
}
</script>