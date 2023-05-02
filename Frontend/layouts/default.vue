<template>
  <div class="">
    <Header>
      <h1 class="text-2xl leading-6 tracking-wide font-sans">CoordinateHint</h1>
      <Button> ログイン </Button>
    </Header>
    <main class="block">
      <MainVisual />
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Molecules/Header.vue'
import Button from '~/components/Atoms/SubmitButton.vue'
import MainVisual from '~/components/Atoms/MainVisualCard.vue'
</script>

<style scoped lang="css">
.container {
}
</style>
