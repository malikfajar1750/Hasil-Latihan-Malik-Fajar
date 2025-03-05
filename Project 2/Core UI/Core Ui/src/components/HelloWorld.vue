<script setup>
// import CCarousel from '@coreui/vue/src/components/carousel/CCarousel'
import { CCarousel,CCarouselItem} from '@coreui/vue'
</script>

<template>
 <CContainer>
  <CRow class="container-text">
    <CCol class="auto">One of three columns</CCol>
    <CCol class="auto">One of three columns</CCol>
    <CCol class="auto">One of three columns</CCol>
  </CRow>
</CContainer>
  <CCarousel controls indicators>
    <CCarouselItem>
      <img src="../assets/shogun-series-samurai-katana-hiroyuki-sanada-yoshii-toranaga-4k-wallpaper-uhdpaper.com-503@3@a.png" alt="Slide 1" />
    </CCarouselItem>
    <CCarouselItem>
      <img src="../assets/shogun-series-samurai-katana-hiroyuki-sanada-yoshii-toranaga-4k-wallpaper-uhdpaper.com-503@3@a.png" alt="Slide 2" />
    </CCarouselItem>
    <CCarouselItem>
      <img src="../assets/shogun-series-samurai-katana-hiroyuki-sanada-yoshii-toranaga-4k-wallpaper-uhdpaper.com-503@3@a.png" alt="Slide 3" />
    </CCarouselItem>
  </CCarousel>
</template>

<style scoped>
img{
  width: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  padding: 2em;
}
/* CSS untuk memastikan Rapi di Tengah */
.container-text {
  height: 10vh; /* Membuat Row mengisi seluruh tinggi layar */
  display: flex;
 
  justify-content: space-around; /* Menyusun kolom secara horizontal di tengah */
  align-items: center; /* Menyusun kolom secara vertikal di tengah */
}

.auto {
  text-align:center ;
  
  padding-inline: 2em; /* Padding agar kolom tidak rapat */
}
.container-text,.auto{
  gap: -1em;
}
/* Menambahkan teks yang terpusat di dalam kolom */

/* .tree-text ,.auto{ */
  /* align-items: center;
  justify-items: center;
  display: flex; */
  /* line-break: 12ch; */
  /* justify-content:space-around; */
  /* text-align: center; */
  /* justify-content: ; */
/* } */
</style>
