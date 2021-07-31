<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <center><h5 class="card-title">Tambah Data Suplier</h5></center>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama Suplier</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="suplier.nama_suplier" />
      <div class="alert alert-danger" v-if="validation.nama_suplier">
        {{ validation.nama_suplier[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Nomor Telepon</label>
    <input type="number" class="form-control" id="inputPassword4"
    v-model="suplier.no_tlp"/>
    <div class="alert alert-danger" v-if="validation.no_tlp">
        {{ validation.no_tlp[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Alamat</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="suplier.alamat" />
    <div class="alert alert-danger" v-if="validation.alamat">
        {{ validation.alamat[0] }}
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

    const suplier = reactive({
      nama_suplier: '',
      no_tlp: '',
      alamat: ''
      
    });

   
    const validation = ref([]);

    const router = useRouter();

    function store(){
      let nama_suplier = suplier.nama_suplier
      let no_tlp = suplier.no_tlp
      let alamat = suplier.alamat
      

  axios.post("http://127.0.0.1:8000/api/supliers", {
        nama_suplier: nama_suplier,
        no_tlp: no_tlp,
        alamat: alamat
       
      })
      .then(() => {
        router.push({
          name:'Suplier',
        })
      })
      .catch(error => {
      console.log(error);
      })
}
    return {
      suplier,
      validation,
      router, 
      store,
     
    }
  },
}
</script>