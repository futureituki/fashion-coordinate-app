<template>
  <div>
    <Button @click="isVisible = true" props="bg-red-400 text-white">
      ログイン
    </Button>
    <ModalWindow :visible="isVisible" @close="isVisible = false">
      <Button
        props="border-2 border-solid text-md py-3.5 w-full rounded-2xl"
        type="button"
      >
        <a href="http://localhost:8080/auth/google">
          <div class="flex items-center gap-2 w-full justify-center">
            <img
              src="/icons8-googleのロゴ-48.png"
              class="w-6 rounded-2xl shadow-xl"
            />
            <h3 class="leading-4 text-sm font-bold tracking-wider w-fit">
              Googleアカウントでログイン
            </h3>
          </div>
        </a>
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
