<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <center><h5 class="card-title">Tambah Data Pembeli</h5></center>
     <form class="row g-3" @submit.prevent="store">
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
    <input type="number" class="form-control" id="inputAddress" 
    v-model="pembeli.jumlah_dibeli" />
    <div class="alert alert-danger" v-if="validation.jumlah_dibeli">
        {{ validation.jumlah_dibeli[0] }}
      </div>
  </div>
   <div class="form-group">
            <button type="submit" class="btn btn-success">Simpan Data</button>
             </div>
         </form>
            </div>
            </div>
</template>
<script>
import { ref } from 'vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
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

    function store(){
      let nama_pembeli = pembeli.nama_pembeli
      let no_tlp = pembeli.no_tlp
      let alamat = pembeli.alamat
      let produk_dibeli = pembeli.produk_dibeli
      let jumlah_dibeli = pembeli.jumlah_dibeli

  axios.post("http://127.0.0.1:8000/api/pembelis", {
        nama_pembeli: nama_pembeli,
        no_tlp: no_tlp,
        alamat: alamat,
        produk_dibeli,
        jumlah: jumlah_dibeli
      })
      .then(() => {
        router.push({
          name:'Pembeli',
        })
      })
      .catch(error => {
      console.log(error);
      })
}
    return {
      pembeli,
      validation,
      router, 
      store,
     
    }
  },
}
</script>