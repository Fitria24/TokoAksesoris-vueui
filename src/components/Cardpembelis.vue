<template>
<div class="row">
 <div class="col-lg-4 mt-3"  v-for="(pembeli, index) in pembelis" :key="index">
<div class="card">
 <center><strong> <div class="card-header">CARD DATA PEMBELI</div></strong></center>
  <div class="card-body">
    <p class="card-text">Nama Pembeli : {{pembeli.nama_pembeli}}</p>
    <p class="card-text">Nomor Telepon : {{pembeli.no_tlp}}</p>
    <p class="card-text">Alamat:  {{pembeli.alamat}}</p>
     <p class="card-text">Produk Dibeli:  {{pembeli.produk_dibeli}}</p>
    <p class="card-text">Jumlah Produk Dibeli : {{pembeli.jumlah_dibeli}}</p>
   
  </div>
  <div class="card-footer text-muted"><router-link class="btn btn-primary" :to="{name:'Detailpembelis', params:{id:pembeli.id}}">Detail</router-link>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["pembelis"],
}
</script>

<style>

</style>