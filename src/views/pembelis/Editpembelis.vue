<template>
<div class="card shadow mt-3">
  <div class="card-body">
   <center> <h5 class="card-title">Edit Data Pembeli</h5></center>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama Pembeli</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="pembeli.nama_pembeli" />
      <div class="alert alert-danger" v-if="validation.nama_pembeli">
        {{ validation.nama_pembeli[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Nomor Telepon</label>
    <input type="number" class="form-control" id="inputPassword4"
    v-model="pembeli.no_tlp"/>
    <div class="alert alert-danger" v-if="validation.no_tlp">
        {{ validation.no_tlp[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Alamat</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="pembeli.alamat" />
    <div class="alert alert-danger" v-if="validation.alamat">
        {{ validation.alamat[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Produk Dibeli</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="pembeli.produk_dibeli" />
    <div class="alert alert-danger" v-if="validation.produk_dibeli">
        {{ validation.produk_dibeli[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Jumlah Dibeli</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="pembeli.jumlah_dibeli" />
    <div class="alert alert-danger" v-if="validation.jumlah_dibeli">
        {{ validation.jumlah_dibeli[0] }}
      </div>
  </div>
  <!-- <div class="col-md-6">
    <label for="inputAddress" class="form-label">Group</label>
    <select class="form-select" aria-label="Default select example" v-model="friend.groups_id" >
    <option v-for="group in groups" :key="group.id" :value="group.id">{{group.name}}</option>
      </select>
      </div> -->
  <div class="col-12">
    <button type="submit" class="btn btn-success">Edit</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { onMounted, ref } from 'vue';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const pembeli = reactive({
    nama_pembeli: '',
    no_tlp: '',
    alamat: '',
    produk_dibeli: '',
    jumlah_dibeli:''
    });

   
    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios
      .get(`http://127.0.0.1:8000/api/pembelis/${route.params.id}/edit`)
      .then((response) => {
        console.log(response.data.data.nama_pembeli)

        pembeli.nama_pembeli = response.data.data.nama_pembeli
        pembeli.no_tlp = response.data.data.no_tlp
        pembeli.alamat = response.data.data.alamat
        pembeli.produk_dibeli = response.data.data.produk_dibeli
        pembeli.jumlah_dibeli = response.data.data.jumlah_dibeli
      })
      .catch(error =>{
        console.log(error.response.data);
      })
      })

    function update(){
      let nama_pembeli = pembeli.nama_pembeli
      let no_tlp = pembeli.no_tlp
      let alamat = pembeli.alamat
      let produk_dibeli = pembeli.produk_dibeli
      let jumlah_dibeli = pembeli.jumlah_dibeli
      axios.put(`http://127.0.0.1:8000/api/produks/${route.params.id}`, {
        nama_pembeli: nama_pembeli,
        no_tlp: no_tlp,
        alamat: alamat,
        produk_dibeli: produk_dibeli,
        jumlah: jumlah_dibeli
      })
      .then(() => {
        router.push({
          name:'Pembeli',
        })
      })
      .catch(error => {
        console.log(error)
      })
    }
    return {
      pembeli,
      validation,
      router, 
      update,
      route
      
    }
  },
}
</script>