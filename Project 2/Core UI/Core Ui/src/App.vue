<script setup>
import HelloWorld from './components/HelloWorld.vue'
// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
// import { CIcon } from '@coreui/icons-vue';
// import { cilList, cilShieldAlt } from '@coreui/icons';
</script>

<template>
  <CContainer class="container">
    <CRow>
      <CCol>
        <h1>Selamat datang di CoreUI Vue.js!</h1>
        <p>Ini adalah contoh penggunaan CoreUI di Vue.js.</p>
      </CCol>
    </CRow>
  </CContainer>
 
  <HelloWorld/>
  <!-- <CIcon :icon="cilList" size="xl"/>
  <CIcon :icon="cilShieldAlt" size="xl"/> -->
</template>

<style scoped>
.container{
  text-align: center;
  padding: 2em;
  line-height: 5ch;
  color: rgb(192, 127, 43);
}
</style>
