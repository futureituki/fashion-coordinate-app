<template>
  <div>
    <MainVisual />
    <section class="mt-14 mb-8">
      <div class="mt-4 mb-4 grid place-items-center">
        <span class="leading-4 tracking-wide font-bold"
          >さっそくコーデを見てみよう</span
        >
      </div>
      <Tab :activeItem="activeItem" :tabItems="tabItems" />
      <div class="mt-14 mb-14">
        <div class="flex gap-10 justify-center flex-wrap">
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainVisual from '~/components/Atoms/MainVisualCard.vue'
import Tab from '~/components/Molecules/TabBar.vue'
import ImageCard from '~/components/Atoms/ImageCard.vue'
const activeItem = ref(1)
const tabItems = [
  { tabId: 1, tabName: '人気' },
  { tabId: 2, tabName: '新着' },
]
</script>
