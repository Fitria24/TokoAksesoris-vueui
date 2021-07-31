<template>
<div class="card text-center mt-4" v-for="s in suplier" :key="s.id">
  <div class="card-header">Detail Suplier</div>
  <div class="card-body">
    <h5 class="card-title">{{s.nama_suplier}}</h5>
    <p class="card-text">{{s.no_tlp}}</p>
      <p class="card-text">{{s.alamat}}</p>
        
  </div>
  <div class="card-footer">
    <router-link class="btn btn-warning" :to="{name:'Editsupliers', params:{id:s.id}}">Edit</router-link>
        <button @click.prevent="suplierDelete(s.id)" class="btn btn-danger">Delete</button>
        </div>
        </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
    let suplier = ref([]);
    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/supliers/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama_suplier)

        suplier.value = response.data.data;
       
      }).catch(error =>{
        console.log(error.response.data)
      })
    })

    function suplierDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/supliers/${id}`)
      .then(()=>{
       router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }

    return {
      suplier,
      router, 
      suplierDelete,
      route
    }
  },
}
</script>

<style>

</style>