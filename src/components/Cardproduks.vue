<template>
<div class="row">
 <div class="col-lg-4 mt-3"  v-for="(produk, index) in produks" :key="index">
<div class="card">
 <center><strong> <div class="card-header">CARD DATA PRODUK</div></strong></center>
  <div class="card-body">
    <p class="card-text">Nama Produk : {{produk.nama_produk}}</p>
    <p class="card-text">Harga : {{produk.harga}}</p>
    <p class="card-text">Stok :  {{produk.stok}}</p>
    <p class="card-text">Kategori :  {{produk.kategori}}</p>
    <p class="card-text">File Gambar Produk : {{produk.produk}}</p>
   
  </div>
  <div class="card-footer text-muted"><router-link class="btn btn-primary" :to="{name:'Detailproduks', params:{id:produk.id}}">Detail</router-link>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["produks"],
}
</script>

<style>

</style>