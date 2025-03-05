<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import WelcomeItem from './components/WelcomeItem.vue';
import Grid from './components/Grid.vue';
import TheWelcome from './components/TheWelcome.vue';
// import WelcomeItem from './components/WelcomeItem.vue';
// import { createApp } from 'vue'
// import DemoGrid from './Grid.vue'
import { ref } from 'vue'

const searchQuery = ref('')
const gridColumns = ['name', 'power']
const gridData = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 }
]

</script>

<template>
<h1>Hello World</h1>
<div>
  <form id="search">
    Search <input name="query" v-model="searchQuery">
  </form>
  <Grid
    :data="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery">
  </Grid>
</div>
<main>
  <Grid/>
  <TheWelcome/>
  <!-- <WelcomeItem/> -->
</main>
</template>

<!-- <style scoped>
h1{
  text-align: center;
  color: aliceblue;
}
button{
  /* padding-inline: 1em; */
  padding: 1em;
  padding-inline: 3em;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* float: cente; */
  /* padding-bottom:2em; */
  background-color: aquamarine;
}
</style> -->

<style scoped>
h1 {
  text-align: center;
  color: aliceblue;
}
 
</style>
