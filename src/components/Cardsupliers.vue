<template>
<div class="row">
 <div class="col-lg-4 mt-3"  v-for="(suplier, index) in supliers" :key="index">
<div class="card">
 <center> <strong><div class="card-header">CARD DATA SUPLIER</div></strong></center>
  <div class="card-body">
    <p class="card-text">Nama Suplier : {{suplier.nama_suplier}}</p>
    <p class="card-text">Nomor Telepon : {{suplier.no_tlp}}</p>
    <p class="card-text">Alamat:  {{suplier.alamat}}</p>
    
   
  </div>
  <div class="card-footer text-muted"><router-link class="btn btn-primary" :to="{name:'Detailsupliers', params:{id:suplier.id}}">Detail</router-link>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["supliers"],
}
</script>

<style>

</style>