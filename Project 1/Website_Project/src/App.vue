<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
let input = ref("");
const fruits = ["apple", "banana", "orange","Guava"];
function filteredList() {
  return fruits.filter((fruit) =>
    fruit.toLowerCase().includes(input.value.toLowerCase())
  );
}
</script>




<template>
  <div class="All">
      <div class="center">
      <h1>Selamat Datang</h1>
    </div>
    <div class="button-center">
      <button @click="increment">
      {{ count }}
    </button>
    </div>
    <div class="input-Search">
      <h2>Cari Di Sini</h2>
      <input type="text" v-model="input" placeholder="Search fruits..." />
    <div class="item fruit" v-for="fruit in filteredList()" :key="fruit">
      <p>{{ fruit }}</p>
    </div>
    <div class="item error" v-if="input&&!filteredList().length">
      <p class="smal">Pencarian Tidak Di Temukan</p>
    </div>
    </div>
  </div>
  
</template>

<style scoped>
.All{
  display: block;
  margin: 20em;
  text-align: center;
  align-items: center;
  float:center;
  margin-top: -5em;
}
.button-center{
  /* padding:40em; */
  display: block;
  float: center;
  text-align: center;
  padding-block: 2em;
}
button{
  padding-inline:6em ;
  opacity: 0.5;
  cursor: pointer;
  background-color: rgb(253, 253, 253);
  padding-block: 1.0em;
  border: none;
}
.center{
  text-align: center;
  justify-content: center;
  align-items: center;
  display: inline;
}
h1{
  color: rgb(253, 254, 255);
  margin-top: 5em;
  font-size: 2.0em;
}
h2, .input-Search{
  color: rgb(253, 254, 255);
  margin:1px;
  font-weight: 500;
  font-size: larger;
}
.input-Search{
  align-items: center;
  text-align: center;
}
input{
  cursor: pointer;
  width: 50%;
  margin: 10px auto;
  padding: 10px 45px;
  margin-top: 2em;
  border-radius: 8px 0;
  opacity: 0.5;
  background-color: rgb(243, 243, 243);
  display: inline-block;
  align-items: center;
  text-align: center;
  justify-content: center;
  overflow: hidden;
  clear: both;
  padding: 1em;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
  rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  /* padding-inline: 1em; */
}
p,.fruit{
  font-size: smaller;
  margin-bottom: 1em;
  /* background-color: rgb(235, 54, 54); */
}
p , .small{
  /* margin:111em; */
  font-size:small;
}
</style>