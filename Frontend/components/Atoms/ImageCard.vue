<template>
  <nuxt-link class="card h-auto relative max-w-sm block">
    <div
      class="overflow-hidden w-full h-full bg-gray-100 md:absolute left-0 top-0"
    >
      <div class="img h-full relative">
          <div class="w-10 h-10 absolute bottom-0 right-0 m-2">
          <SubmitButton type="button" props="bg-gray-50 py-1 px-2 text-lg rounded-lg transition-all
               hover:text-2xl hover:mt-[-2px] hover:ml-[-3px]">
               <FontAwesomeIcon icon="heart" class="text-gray-300" />
</SubmitButton>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import SubmitButton from '~/components/Atoms/SubmitButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style scoped>
.card {
  width: 45%;
  aspect-ratio: 5 / 8;
}
.img {
  background: url('/test2.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
