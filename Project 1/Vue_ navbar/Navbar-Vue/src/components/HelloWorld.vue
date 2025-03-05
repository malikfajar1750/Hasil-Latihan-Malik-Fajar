<script setup>
// Kamu bisa menambahkan skrip di sini jika diperlukan, misalnya data atau metode
</script>

<template>
  <h2 class="head2">Find your boxing athlete</h2>
  <div class="card-container">
    <div class="card">
      <figure>
        <img src="./Card-Background/thao-lee-NJuEdF5P0_8-unsplash.jpg" alt="" />
        <figcaption>
          <h3>Women Boxing</h3>
        </figcaption>
      </figure>
    </div>
    <div class="card">
      <figure>
        <img src="./Card-Background/metin-ozer-S1kp1toFK0A-unsplash.jpg" alt="" />
        <figcaption>
          <h3>boxing Floyd</h3>
        </figcaption>
      </figure>
    </div>
    <div class="card">
      <figure>
        <img src="./Card-Background/sander-sammy-KwawO7WRSO8-unsplash.jpg" alt="" />
        <figcaption>
          <h3>Sammy Boxing</h3>
        </figcaption>
      </figure>
    </div>
    <div class="card">
      <figure>
        <img src="./Card-Background/jonathan-tomas-rX36vcriciQ-unsplash.jpg" alt="" />
        <figcaption>
          <h3>jonathantomas Boxing</h3>
        </figcaption>
      </figure>
    </div>
    <div class="card">
      <figure>
        <img src="./Card-Background/zachary-kadolph-hwHHq82Enf0-unsplash.jpg" alt="" />
        <figcaption>
          <h3>zachary kadolph Boxing</h3>
        </figcaption>
      </figure>
    </div>
    <div class="card">
      <figure>
        <img src="./Card-Background/chris-kendall-sJ6az6-T1u8-unsplash.jpg" alt="" />
        <figcaption>
          <h3>Chris Boxing</h3>
        </figcaption>
      </figure>
    </div>
    <!-- <div class="card">
      <figure>
        <img src="./Card-Background/metin-ozer-S1kp1toFK0A-unsplash.jpg" alt="" />
        <figcaption>
          <h3>Women Boxing</h3>
        </figcaption>
      </figure>
    </div> -->
    <!-- <div class="card">
      <figure>
        <img src="./Card-Background/thao-lee-NJuEdF5P0_8-unsplash.jpg" alt="" />
        <figcaption>
          <h3>Women Boxing</h3>
        </figcaption>
      </figure>
    </div> -->
  </div>
</template>

<style scoped>
.head2,
.card-container {
  text-align: left;
  margin-top: 5em;
  margin-inline: 2em;
}
.head2,
h2 {
  margin-bottom: -4em;
  margin-left: 5em;
  font-size: x-large;
  color: #b3b0b0;
}
.card-container {
  display: grid;
  /* position: fixed; */
  /* padding-block: 1em; */
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr); /* Membuat 2 kolom */
  row-gap: 4.4em;
  position: relative;
  column-gap: 1.3em; /* Memberikan jarak antar card */
  justify-items: center;
  align-items: center;
  /* Menyusun card agar rata tengah */
  padding: 5em;
}

.card {
  width: 20em;
  height: 300px;
  margin: -1em;
  border: 1px solid #757575;
  border-radius: 6px;
  overflow: hidden;

  box-shadow: 0 4px 8px rgba(180, 180, 180, 0.1);
}

figure {
  margin: 0px;
  height: 100%;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  object-fit: cover;

  object-position: center;
}

figcaption {
  position: relative;
  background-color: rgb(26, 25, 25);
  bottom: 100px;
  /* block: 100px; */
  top: -4em;
  /* top: 100px; */
  color: rgb(255, 255, 255);
  font-size: 13px;
  text-align: center;
  /* background-color: rgba(0, 0, 0, 0.5); */
  padding: 0.1em 1em;
  border-radius: 1px;
}
</style>
