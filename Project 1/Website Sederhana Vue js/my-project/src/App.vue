<template>
  <!-- <div id="app">
    <div class="container">
      <h1>Welcome to Vue.js</h1>
      <p class="description">This is a simple, modern layout to showcase the power of Vue.js!</p>
      <button @click="toggleMessage" class="cta-button">Click Me</button>
      <div v-if="showMessage" class="message-box">
        <p>Vue.js makes building UIs effortless and fun!</p>
      </div>
    </div>
  </div> -->
  <div class="container">
    <div>
    <!-- <img src="./assets/88584-2560x1440-desktop-hd-fortnite-background.jpg" alt="gambar"> -->
  </div>
    <nav>
      <ul>
        <li><a href="Home">Home</a></li>
        <li><a href="Website">Website</a></li>
        <li><a href="Protoflio">Protoflio</a></li>  
      </ul>
    </nav>
  </div>
   
</template>

<!-- <script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  data() {
    return {
      showMessage: false
    };
  },
  methods: {
    toggleMessage() {
      this.showMessage = !this.showMessage;
    }
  }
};
</script> -->

<style scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color: #161616;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
} */

/* .container {
  text-align: center;
  background-color: white;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 400px;
} */

 .container{
  /* background-color: #f5f5f5; */
  padding-block:0px;
  margin-inline: 0px;
  position: relative;
 }
 nav{
  margin-block: 0em;
  padding: 0.1em;
  /* padding-inline: 1px; */
  /* background-color: rgb(6, 6, 10); */
  position: relative;
  /* overflow: hidden; */
  cursor: pointer;
 }
 nav ul {
  padding: 11px 12px;
  margin: 2px;
  justify-content:right;
  display: flex;
  gap: 1em;
 }
 nav li{
  padding: 1em;
  display: flex;
 }
 nav a{
  font-size: 2em;
  text-decoration: none;
  list-style-type: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(5, 5, 5);
 }
 
a:hover{
  background-color: rgb(53, 152, 238);
  border-bottom: 2px solid;
}



h1 {
  color: #ce2121;
  font-size: 2.0em;
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-bottom: 1em;
}

/* .description {
  color: #666;
  font-size: 1.1em;
  margin-bottom: 1.5em;
}

.cta-button {
  padding: 1em 2em;
  font-size: 1.1em;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #367c5f;
}

.message-box {
  margin-top: 2em;
  padding: 1em;
  background-color: #e6f7e6;
  border-radius: 5px;
  color: #333;
  font-size: 1.2em;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
} */
</style>
