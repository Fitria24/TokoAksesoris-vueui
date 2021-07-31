<template>
<div class="card text-center mt-4" v-for="p in produk" :key="p.id">
  <div class="card-header">Detail Produk</div>
  <div class="card-body">
    <h5 class="card-title">{{p.nama_produk}}</h5>
    <p class="card-text">{{p.harga}}</p>
      <p class="card-text">{{p.stok}}</p>
       <p class="card-text">{{p.kategori}}</p>
      <p class="card-text">{{p.produk}}</p>
  </div>
  <div class="card-footer">
    <router-link class="btn btn-warning" :to="{name:'Editproduks', params:{id:p.id}}">Edit</router-link>
        <button @click.prevent="produkDelete(p.id)" class="btn btn-danger">Delete</button>
        </div>
        </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
    let produk = ref([]);
    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/produks/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama_produk)

        produk.value = response.data.data;
       
      }).catch(error =>{
        console.log(error.response.data)
      })
    })

    function produkDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/produks/${id}`)
      .then(()=>{
       router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }

    return {
      produk,
      router, 
      produkDelete,
      route
    }
  },
}
</script>

<style>

</style>