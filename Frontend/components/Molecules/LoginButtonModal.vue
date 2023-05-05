<template>
  <div>
    <Button @click="isVisible = true" props="bg-red-400 text-white">
      ログイン
    </Button>
    <ModalWindow :visible="isVisible" @close="isVisible = false">
      <Button props="border-2 border-solid text-md py-3.5 w-full rounded-2xl">
        <div class="flex gap-4 items-center">
          <img
            src="~/assets/google.png"
            class="w-6 rounded-2xl shadow-xl m-auto"
          />
          <h3 class="flex-grow leading-4 text-xs font-bold tracking-wider">
            Googleアカウントでログイン
          </h3>
        </div>
      </Button>
    </ModalWindow>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '~/components/Atoms/SubmitButton.vue'
import ModalWindow from '~/components/Atoms/ModalWindow.vue'
const isVisible = ref(false)
</script>

<style scoped></style>
