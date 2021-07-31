<template>
  <div class="produk">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
              <br>
              <br>
              <center>  <strong>DATA SUPLIER TOKO AKSESORIS </strong> </center>
     <br>
    <hr class="my-3">
      <router-link class="btn btn-success" to="/createsupliers">Tambah Data Suplier</router-link>
<br>
<br>
      <Cardsupliers :supliers="supliers"/>
      <br>
      <br>
   <table class="table table-bordered table-hover table-striped">
  <thead>
    <tr> 
     
      <th scope="col">Nama Suplier</th>
      <th scope="col">Nomor Telepon</th>
      <th scope="col">Alamat</th>
      
         <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="(suplier, index) in supliers" :key="index">
     
      <td>{{ suplier.nama_suplier }}</td>
      <td>{{ suplier.no_tlp }}</td>
      <td>{{ suplier.alamat }}</td>
     
      <td>
        <router-link class="btn btn-warning" :to="{name:'Editsupliers', params:{id:suplier.id}}">Edit</router-link>
        <button @click.prevent="suplierDelete(suplier.id)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
    
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Cardsupliers from "@/components/Cardsupliers.vue";
import { ref, onMounted } from 'vue';

export default {
  name: 'Suplier',
  components: {
    Slider,
    Cardsupliers,
  },
  setup(){
    let supliers = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/supliers')
      .then(response => {
        supliers.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function suplierDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/supliers/${id}`)
      .then(()=>{
        let z = this.supliers.map(supliers => supliers.id).indexOf(id);
        this.supliers.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      supliers,
      suplierDelete
    }
  }
};
</script>