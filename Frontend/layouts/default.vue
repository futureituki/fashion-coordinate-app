<template>
  <div class="">
    <main class="block bg-red-50">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/Molecules/Footer.vue'
</script>

<style scoped lang="css"></style>
