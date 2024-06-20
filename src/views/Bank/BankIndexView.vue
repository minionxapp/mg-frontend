<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h1>Bank List</h1>
            </div>
            <div class="col-md-6">

                <div class="input-group input-group-lg">
                    <input type="search" class="form-control form-control-lg" placeholder="Type your keywords here"
                        value="Lorem ipsum" v-model="cari.kata">
                    <div class="input-group-append">
                        <button type="submit" class="btn btn-lg btn-default" @click="retrieve(1)">
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
                <h3 class="card-title">Daftar</h3>
            </div>

            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th style="width: 10px">#</th>
                            <th>Kode</th>
                            <th>Nama </th>
                            <th>Jenis </th>
                            <th>Status </th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody v-for="(item, index) in tables" :key="index">
                        <tr>
                            <td>{{ incrementIndex(index) }}</td>
                            <td>{{ item.kode }}</td>
                            <td>{{ item.nama }} </td>
                            <td>{{ item.jenis }} </td>
                            <td>{{ item.status }} </td>
                            <td>edit </td>

                            <td><span class="badge bg-danger">{{ item.panjang }}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="card-footer clearfix">
                <ul class="pagination pagination-sm m-0 float-right">
                    <li class="page-item"><a class="page-link" href="#">«</a></li>
                    <li  v-for="i in total_page" :key="i" class="page-item"><a class="page-link" href="#" @click="retrieve(i)">{{ i}}</a></li>
                    <li class="page-item"><a class="page-link" href="#">»</a></li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'getBank',
    data() {
        return {
            validation: [],
            tables: [],
            cari: [],
            nomor: [],
            token: localStorage.getItem('token'),
            query : '',
            total_page :0
        }
    },
    methods: {
        retrieve(page) {
            this.query = '';
            this.query = 'page='+page;
            if(typeof this.cari.kata !== 'undefined'){
                if((this.cari.kata).length>0  ){
                    this.query = this.query +'&nama='+this.cari.kata
                }else{
                    this.query = 'page='+page;
                }
            }else{
                this.query = 'page='+page;
            }
            this.nomor.urut = 0;
                axios.get(process.env.VUE_APP_API_URL + 'api/banks?'+this.query , {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                }).then(result => {
                    console.log(result.data.paging.total_page)
                    this.tables = result.data.data
                    this.total_page =result.data.paging.total_page
                })
        },
        incrementIndex(key) {
            return key + 1;
        },
        add() {
            return this.$router.push({ name: 'bankAdd' })
        }
    }
}
</script>