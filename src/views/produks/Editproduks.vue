<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <center><h5 class="card-title">Edit Produks</h5></center>
     <form class="row g-3" @submit.prevent="update">
  
  <div class="col-md-12">
    <label for="inputEmail4" class="form-label">Nama Produk</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="produk.nama_produk" />
      <div class="alert alert-danger" v-if="validation.nama_produk">
        {{ validation.nama_produk[0] }}
      </div>
  </div>
  
    <div class="col-md-12">
    <label for="inputPassword4" class="form-label">Harga</label>
    <input type="number" class="form-control" id="inputPassword4"
    v-model="produk.harga"/>
    <div class="alert alert-danger" v-if="validation.harga">
        {{ validation.harga[0] }}
      </div>
  </div>
   
  <div class="col-md-12">
    <label for="inputAddress" class="form-label">Stok</label>
    <input type="number" class="form-control" id="inputAddress" 
    v-model="produk.stok" />
    <div class="alert alert-danger" v-if="validation.stok">
        {{ validation.stok[0] }}
      </div>
  </div>
  <div class="form-group">
  <div class="col-md-12">
    <label for="formFile" class="form-label">Kategori</label>
            <select class="form-control" id="kategori" name="kategori" >
                <option value="Aksesoris Wanita">Akseosris Wanita</option>
                <option value="Aksesoris Pria">Aksesoris Pria</option> 
                </select>
              </div>   
              </div> 
  <br>
  <br>
  <div class="col-md-12">
     <label for="formFile" class="form-label">Gambar Produk</label>
  <input class="form-control" type="file" id="formFile">
    <div class="alert alert-danger" v-if="validation.produk">
        {{ validation.produk[0] }}
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
import { onMounted, ref } from 'vue';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const produk = reactive({
    nama_produk: '',
      harga: '',
      stok: '',
      kategori: '',
      produk:''
    });

   
    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios
      .get(`http://127.0.0.1:8000/api/produks/${route.params.id}/edit`)
      .then((response) => {
        console.log(response.data.data.nama_produk)

        produk.nama_produk = response.data.data.nama_produk
        produk.harga = response.data.data.harga
        produk.stok = response.data.data.stok
         produk.kategori = response.data.data.kategori
         produk.produk = response.data.data.produk
      })
      .catch(error =>{
        console.log(error.response.data);
      })
      })

    function update(){
      let nama_produk = produk.nama_produk
      let harga = produk.harga
      let stok = produk.stok
      let kategori = produk.kategori
      let produk = produk.produk 
    
      axios.put(`http://127.0.0.1:8000/api/produks/${route.params.id}`, {
        nama_produk: nama_produk,
        harga: harga,
        stok: stok,
        kategori: kategori,
        produk: produk
      })
      .then(() => {
        router.push({
          name:'Produk',
        })
      })
      .catch(error => {
        console.log(error)
      })
    }
    return {
      produk,
      validation,
      router, 
      update,
      route
      
    }
  },
}
</script>