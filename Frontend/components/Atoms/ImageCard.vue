<template>
  <nuxt-link class="card h-auto relative max-w-sm block">
    <div
      class="overflow-hidden w-full h-full bg-gray-100 md:absolute left-0 top-0"
    >
      <div class="img h-full"></div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts"></script>

<style scoped>
.card {
  width: 45%;
  aspect-ratio: 7 / 10;
}
.img {
  background: url('/test2.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
