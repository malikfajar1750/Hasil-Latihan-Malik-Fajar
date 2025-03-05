<template>
  
  <div id="app">
    <div id="app-1">
      <span v-if="terlihat">Saya bisa dilihat</span>
    </div>

    <div id="app-2">
      <span v-bind:title="pesan">
        Arahkan mouse Anda kesini dan tunggu dalam beberapa detik untuk melihat judul pesan yang dinamis
      </span>
    </div>

    <div id="app-5">
      <p>{{ pesan }}</p>
      <button @click="balikkanPesan">Balikkan Pesan</button>
      <button @click="batalPesan">Batalkan Pesan</button>
      <p>Menggunakan tanda mustache: {{ rawHtml }}</p>
      <p>Menggunakan direktif v-html: <span v-html="rawHtml"></span></p>
    </div>
  </div>
  <span>KataKata: {{ msg }}</span>
  <span v-once> Di atas Langit Masih ada langit {{ msg }}</span>
  <main>
    <WelcomeItem/>
  </main>
</template>

<script>
import WelcomeItem from './components/WelcomeItem.vue';
export default {
  data() {
    return {
      terlihat: true,
      pesan: 'Hai Vue.js!',
    };
  },
  methods: {
    balikkanPesan() {
      this.pesan = 'Pesan Berhasil Di Balikan'; 
      // this.pesan = this.pesan.split('').reduce().join('');
    },
    batalPesan() {
      this.pesan = 'Pesan Berhasil Di Batalkan'; // Reset pesan ke nilai awal
    }
  }
}

</script>

<style scoped>
/* Tambahkan gaya CSS yang sesuai */
#app {
  padding: 2em;
}
</style>
