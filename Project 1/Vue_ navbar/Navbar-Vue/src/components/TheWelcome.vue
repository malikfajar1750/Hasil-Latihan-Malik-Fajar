<script setup>
// import WelcomeItem from './WelcomeItem.vue'
// import DocumentationIcon from './icons/IconDocumentation.vue'
// import ToolingIcon from './icons/IconTooling.vue'
// import EcosystemIcon from './icons/IconEcosystem.vue'
// import CommunityIcon from './icons/IconCommunity.vue'
// import SupportIcon from './icons/IconSupport.vue'

// const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
const msg = 'Hello!'

// functions
function log() {
  console.log(msg)
}
</script>

<template>
  <div class="btn-center">
    <button @click="log">{{ msg }}</button>
  </div>
</template>

<style scoped>
.btn-center,
button {
  /* margin-inline: 42em; */
  padding-inline: 2em;
  align-items: center;
  text-align: center;
  margin-top: 4em;
  justify-content: center;
}
button {
  cursor: pointer;
  padding-inline: 5em;
  padding-block: 1em;
  color: aliceblue;
  opacity: 1.1;
  /* padding-top: 1px; */
  background-image: url(../components/Card-Background/metin-ozer-S1kp1toFK0A-unsplash.jpg);
  /* background-color: aquamarine; */
  border-radius: none;
}
</style>
