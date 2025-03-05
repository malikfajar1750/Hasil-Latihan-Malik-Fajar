<script setup>
new Vue({
  el: '#app',
  data: {
    // Array menu untuk navigasi
    menu: [
      { name: 'Beranda', link: '/' },
      { name: 'Tentang', link: '/about' },
      { name: 'Kontak', link: '/contact' },
      { name: 'Blog', link: '/blog' }
    ]
  }
});
</script>
<template>
     <div id="app">
    <nav>
      <ul>
        <!-- Menggunakan v-for untuk menampilkan setiap item menu -->
        <li v-for="(item, index) in menu" :key="index">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
    <div v-bind:id="dynamicId"></div>
    <button v-bind:disabled="isButtonDisabled">Tombol</button>
</template>

<style>
nav ul {
  list-style-type: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin-right: 20px;
}
</style>