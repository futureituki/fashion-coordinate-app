<template>
  <div>
    <SubmitButton @click="state.isVisible = true" props="bg-red-400 text-white">
      ログイン
    </SubmitButton>
    <ModalWindow :visible="state.isVisible" @close="state.isVisible = false">
      <SubmitButton
        props="border-2 border-solid text-md py-3.5 w-full rounded-2xl"
        type="button"
        :disabled="state.isLoading"
        @click="state.isLoading = true"
      >
        <a href="http://localhost:8080/auth/google">
          <div class="flex items-center gap-2 w-full justify-center">
            <div v-if="state.isLoading" className="flex justify-center">
  <div className="animate-spin h-4 w-4 border-2 border-gray-500 rounded-full border-t-transparent"></div>
</div>
            <img
              src="/icons8-googleのロゴ-48.png"
              class="w-6 rounded-2xl shadow-xl"
            />
            <h3 class="leading-4 text-sm font-bold tracking-wider w-fit">
              Googleアカウントでログイン
            </h3>
          </div>
        </a>
      </SubmitButton>
    </ModalWindow>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import SubmitButton from '~/components/Atoms/SubmitButton.vue'
import ModalWindow from '~/components/Atoms/ModalWindow.vue'
const state = reactive({
  isVisible:false,
  isLoading:false
})
</script>

<style scoped></style>
