<template>
<div class="card text-center mt-4" v-for="p in pembeli" :key="p.id">
  <div class="card-header">Detail Pembeli</div>
  <div class="card-body">
    <h5 class="card-title">{{p.nama_pembeli}}</h5>
    <p class="card-text">{{p.no_tlp}}</p>
      <p class="card-text">{{p.alamat}}</p>
        <p class="card-text">{{p.produk_dibeli}}</p>
      <p class="card-text">{{p.jumlah_dibeli}}</p>
  </div>
  <div class="card-footer">
    <router-link class="btn btn-warning" :to="{name:'Editpembelis', params:{id:p.id}}">Edit</router-link>
        <button @click.prevent="pembeliDelete(p.id)" class="btn btn-danger">Delete</button>
        </div>
        </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
    let pembeli = ref([]);
    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/pembelis/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama_pembeli)

        pembeli.value = response.data.data;
       
      }).catch(error =>{
        console.log(error.response.data)
      })
    })

    function pembeliDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/pembelis/${id}`)
      .then(()=>{
       router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }

    return {
      pembeli,
      router, 
      pembeliDelete,
      route
    }
  },
}
</script>

<style>

</style>