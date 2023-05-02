<template>
  <section class="mt-8 mb-8">
    <div class="mt-4 mb-4 grid place-items-center">
      <span class="leading-4 tracking-wide font-bold"
        >さっそくコーデを見てみよう</span
      >
    </div>
    <Tab :activeItem="activeItem" :tabItems="tabItems" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Tab from '~/components/Molecules/TabBar.vue'
const activeItem = ref(1)
const tabItems = [
  { tabId: 1, tabName: '人気' },
  { tabId: 2, tabName: '新着' },
]
</script>
