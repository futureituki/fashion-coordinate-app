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
  padding-top: 56%;
  margin-bottom: 6.3%;
  width: 45%;
}
.img {
  background: url('/test2.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
