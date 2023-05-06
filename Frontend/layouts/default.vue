<template>
  <div class="">
    <main class="block">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/Molecules/Footer.vue'
</script>

<style scoped lang="css"></style>
