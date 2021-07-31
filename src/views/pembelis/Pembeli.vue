<template>
  <div class="produk">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
              <br>
              <br>
              <center>  <strong>DATA PEMBELI TOKO AKSESORIS </strong> </center>
     <br>
    <hr class="my-3">
      <router-link class="btn btn-success" to="/createpembelis">Tambah Data Pembeli</router-link>
<br>
<br>
      <Cardpembelis :pembelis="pembelis"/>
      <br>
      <br>
   <table class="table table-bordered table-hover table-striped">
  <thead>
    <tr> 
     
      <th scope="col">Nama Pembeli</th>
      <th scope="col">Nomor Telepon</th>
      <th scope="col">Alamat</th>
       <th scope="col">Nama Produk Dibeli</th>
      <th scope="col">Jumlah Produk Dibeli</th>
         <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="(pembeli, index) in pembelis" :key="index">
     
      <td>{{ pembeli.nama_pembeli }}</td>
      <td>{{ pembeli.no_tlp }}</td>
      <td>{{ pembeli.alamat }}</td>
      <td>{{ pembeli.produk_dibeli }}</td>
      <td>{{ pembeli.jumlah_dibeli }}</td>
      <td>
        <router-link class="btn btn-warning" :to="{name:'Editpembelis', params:{id:pembeli.id}}">Edit</router-link>
        <button @click.prevent="pembeliDelete(pembeli.id)" class="btn btn-danger">Delete</button>
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
import Cardpembelis from "@/components/Cardpembelis.vue";
import { ref, onMounted } from 'vue';

export default {
  name: 'Pembeli',
  components: {
    Slider,
     Cardpembelis,
  },
  setup(){
    let pembelis = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/pembelis')
      .then(response => {
        pembelis.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function pembeliDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/pembelis/${id}`)
      .then(()=>{
        let z = this.pembelis.map(pembelis => pembelis.id).indexOf(id);
        this.pembelis.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      pembelis,
      pembeliDelete
    }
  }
};
</script>