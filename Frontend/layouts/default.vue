<template>
  <div class="">
    <Header>
      <h1 class="text-2xl leading-6 tracking-wide font-sans">CoordinateHint</h1>
      <LoginButtonModal />
    </Header>
    <main class="block">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Molecules/Header.vue'
import Footer from '~/components/Molecules/Footer.vue'
import LoginButtonModal from '~/components/Molecules/LoginButtonModal.vue'
</script>

<style scoped lang="css"></style>
