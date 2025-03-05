<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <nav>
    <ul>
      <li><a href=""></a>Home</li>
      <li><a href=""></a>About</li>
      <li><a href=""></a>Service</li>
    </ul>
  </nav>
  <main>
    <TheWelcome />
    <HelloWorld />
  </main>
  <footer>© 2025boxeo</footer>
</template>

<style scoped>
nav {
  padding: 0px;
  margin: 0px;
  display: flex;
  cursor: pointer;
  color: rgb(187, 223, 255);
  /* background-color: black; */
}
nav,
ul {
  padding: 1px 0;
  margin: 6px 0;
  justify-content: center;
  align-items: baseline;
  /* display: ; */
  /* gap: 22em; */
  /* display: flex; */
}
nav li {
  display: inline;
  margin: 1em;
  /* float:left; */
  /* gap: 1em; */
}
a {
  text-decoration: none;
  list-style-type: none;
}
/* nav:hover{
    color: antiquewhite;
  } */
footer {
  padding: 1em;
  font-size: large;
  color: aliceblue;
  text-align: center;
}
</style>
