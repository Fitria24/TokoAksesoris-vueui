<template>
  <div class="produk">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
              <br>
              <br>
              <center>  <strong>DATA PRODUK TOKO AKSESORIS </strong> </center>
     <br>
    <hr class="my-3">
      <router-link class="btn btn-success" to="/createproduks">Tambah Data Produk</router-link>
<br>
<br>
      <Cardproduks :produks="produks"/>
      <br>
      <br>
   <table class="table table-bordered table-hover table-striped">
  <thead>
    <tr> 
     
      <th scope="col">Nama Produk</th>
      <th scope="col">Harga</th>
      <th scope="col">Stok</th>
        <th scope="col">Kategori</th>
       <th scope="col">File Gambar Produk</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="(produk, index) in produks" :key="index">
     
      <td>{{ produk.nama_produk }}</td>
      <td>{{ produk.harga }}</td>
      <td>{{ produk.stok }}</td>
       <td>{{ produk.kategori }}</td>
      <td>{{ produk.produk }}</td>
      <td>
        <router-link class="btn btn-warning" :to="{name:'Editproduks', params:{id:produk.id}}">Edit</router-link>
        <button @click.prevent="produkDelete(produk.id)" class="btn btn-danger">Delete</button>
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
import Cardproduks from "@/components/Cardproduks.vue";
import { ref, onMounted } from 'vue';

export default {
  name: 'Produk',
  components: {
    Slider,
    Cardproduks,
  },
  setup(){
    let produks = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/produks')
      .then(response => {
        produks.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function produkDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/produks/${id}`)
      .then(()=>{
        let z = this.produks.map(produks => produks.id).indexOf(id);
        this.produks.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      produks,
      produkDelete
    }
  }
};
</script>