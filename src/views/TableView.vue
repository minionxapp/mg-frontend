<template>
    <div class="container">
        <h1>ini adalah untuk imput table</h1>
        <form @submit.prevent="createTable" class="form-signin" id="formLogin">
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="namaTable">Nama Table</label>
                    <input id="namaTable" type="text" class="form-control" v-model="table.namaTable"
                        placeholder="Nama Table" autocomplete="off" />
                    <div v-if="validation.namaTable" class="mt-2 alert alert-danger">
                        Masukkan Nama Table
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="namaKolom">Nama Kolom</label>
                    <input id="namaKolom" type="text" class="form-control" v-model="table.namaKolom"
                        placeholder="Nama Kolom" autocomplete="off" />
                    <div v-if="validation.namaKolom" class="mt-2 alert alert-danger">
                        Masukkan Nama Kolom
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group  col-md-6">
                    <label for="tipe">Tipe</label>
                    <input id="tipe" type="text" class="form-control" v-model="table.tipe" placeholder="tipe"
                        autocomplete="off" />
                    <div v-if="validation.tipe" class="mt-2 alert alert-danger">
                        Masukkan Tipe
                    </div>
                </div>
                <div class="form-group  col-md-6">
                    <label for="panjang">Panjang</label>
                    <input id="panjang" type="text" class="form-control" v-model="table.panjang" placeholder="panjang"
                        autocomplete="off" />
                  
                    <div v-if="validation.panjang" class="mt-2 alert alert-danger">
                        Masukkan Panjang
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="notNull">NotNull</label>
                    <!-- <input id="notNull" type="text" class="form-control" v-model="table.notNull" placeholder="notNull"
                        autocomplete="off" /> -->
                    <select  id="notNull" v-model="table.notNull" class="form-control" >
                        <option>Y</option>
                        <option>N</option>
                    </select>
                    <div v-if="validation.notNull" class="mt-2 alert alert-danger">
                        Masukkan NotNull
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="createRequest">Create Request</label>
                    <!-- <input id="createRequest" type="text" class="form-control" v-model="table.createRequest"
                        placeholder="createRequest" autocomplete="off" /> -->
                    <select  id="createRequest" v-model="table.createRequest" class="form-control" >
                        <option>Y</option>
                        <option>N</option>
                    </select>
                    <div v-if="validation.createRequest" class="mt-2 alert alert-danger">
                        Masukkan Create Request
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="createResponseSukses">Create Response Sukses</label>
                    <!-- <input id="createResponseSukses" type="text" class="form-control"
                        v-model="table.createResponseSukses" placeholder="createResponseSukses" autocomplete="off" /> -->
                    <select  id="createResponseSukses" v-model="table.createResponseSukses" class="form-control" >
                        <option>Y</option>
                        <option>N</option>
                    </select>
                    <div v-if="validation.createResponseSukses" class="mt-2 alert alert-danger">
                        Masukkan Create Response Sukses
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="updateRequest">Update Request</label>
                    <!-- <input id="updateRequest" type="text" class="form-control" v-model="table.updateRequest"
                        placeholder="updateRequest" autocomplete="off" /> -->
                    <select  id="updateRequest" v-model="table.updateRequest" class="form-control" >
                        <option>Y</option>
                        <option>N</option>
                    </select>
                    <div v-if="validation.updateRequest" class="mt-2 alert alert-danger">
                        Masukkan Update Request
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="updateResponseSukses">Update Response Sukses</label>
                    <!-- <input id="updateResponseSukses" type="text" class="form-control"
                        v-model="table.updateResponseSukses" placeholder="updateResponseSukses" autocomplete="off" /> -->
                    <select  id="updateResponseSukses" v-model="table.updateResponseSukses" class="form-control" >
                        <option>Y</option>
                        <option>N</option>
                    </select>
                    <div v-if="validation.updateResponseSukses" class="mt-2 alert alert-danger">
                        Masukkan Update Response Sukses
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="getRequest">Get Request</label>
                    <!-- <input id="getRequest" type="text" class="form-control" v-model="table.getRequest"
                        placeholder="getRequest" autocomplete="off" /> -->
                    <select  id="getRequest" v-model="table.getRequest" class="form-control" >
                        <option>Y</option>
                        <option>N</option>
                    </select>
                    <div v-if="validation.getRequest" class="mt-2 alert alert-danger">
                        Masukkan Get Request
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="getResponse">Get Response</label>
                    <!-- <input id="getResponse" type="text" class="form-control" v-model="table.getResponse"
                        placeholder="getResponse" autocomplete="off" /> -->
                    <select  id="getResponse" v-model="table.getResponse" class="form-control" >
                        <option>Y</option>
                        <option>N</option>
                    </select>
                    <div v-if="validation.getResponse" class="mt-2 alert alert-danger">
                        Masukkan Get Response
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="searchRequest">Search Request</label>
                    <!-- <input id="searchRequest" type="text" class="form-control" v-model="table.searchRequest"
                        placeholder="searchRequest" autocomplete="off" /> -->
                    <select  id="searchRequest" v-model="table.searchRequest" class="form-control" >
                        <option>Y</option>
                        <option>N</option>
                    </select>
                    <div v-if="validation.searchRequest" class="mt-2 alert alert-danger">
                        Masukkan Search Request
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="searchResponse">Search Response</label>
                    <!-- <input id="searchResponse" type="text" class="form-control" v-model="table.searchResponse"
                        placeholder="searchResponse" autocomplete="off" /> -->
                    <select  id="searchResponse" v-model="table.searchResponse" class="form-control" >
                        <option>Y</option>
                        <option>N</option>
                    </select>
                    <div v-if="validation.searchResponse" class="mt-2 alert alert-danger">
                        Masukkan Search Response
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="removeRequest">Remove Request</label>
                    <!-- <input id="removeRequest" type="text" class="form-control" v-model="table.removeRequest"
                        placeholder="removeRequest" autocomplete="off" /> -->
                    <select  id="removeRequest" v-model="table.removeRequest" class="form-control" >
                        <option>Y</option>
                        <option>N</option>
                    </select>
                    <div v-if="validation.removeRequest" class="mt-2 alert alert-danger">
                        Masukkan Remove Request
                    </div>
                </div>
            </div>
            <div class="row">

                <div class="form-group col-md-6">
                    <label for="removeResponse">Remove Response</label>
                    <!-- <input id="removeResponse" type="text" class="form-control" v-model="table.removeResponse"
                        placeholder="removeResponse" autocomplete="off" /> -->
                    <select  id="removeResponse" v-model="table.removeResponse" class="form-control" >
                        <option>Y</option>
                        <option>N</option>
                    </select>
                    <div v-if="validation.removeResponse" class="mt-2 alert alert-danger">
                        Masukkan Remove Response
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="testValue">Test Value</label>
                    <!-- <input id="testValue" type="text" class="form-control" v-model="table.testValue"
                        placeholder="testValue" autocomplete="off" /> -->
                        <select  id="testValue" v-model="table.testValue" class="form-control" >
                            <option>Y</option>
                            <option>N</option>
                        </select>
                    <div v-if="validation.testValue" class="mt-2 alert alert-danger">
                        Masukkan Test Value
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
    name: 'createTable',
    data() {
        return {
            validation: [],
            table: [],
            token: localStorage.getItem('token')
        }
    },

    methods: {
        createTable() {

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:3000/api/tables',
                headers: {
                    'Authorization': this.token
                },
                data:{
                    'namaTable': this.table.namaTable,
                    'namaKolom': this.table.namaKolom,
                    'tipe': this.table.tipe,
                    'panjang': this.table.panjang,
                    'notNull': this.table.notNull,
                    'createRequest': this.table.createRequest,
                    'createResponseSukses': this.table.createResponseSukses,
                    'updateRequest': this.table.updateRequest,
                    'updateResponseSukses': this.table.updateResponseSukses,
                    'getRequest': this.table.getRequest,
                    'getResponse': this.table.getRequest,
                    'searchRequest': this.table.searchRequest,
                    'searchResponse': this.table.searchResponse,
                    'removeRequest': this.table.removeRequest,
                    'removeResponse': this.table.removeResponse,
                    'testValue': this.table.testValue
                }
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });


        }
    }
}

</script>