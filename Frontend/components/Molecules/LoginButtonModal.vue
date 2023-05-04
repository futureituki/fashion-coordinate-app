<template>
  <div>
    <Button @click="isVisible = true"> ログイン </Button>
    <ModalWindow :visible="isVisible" @close="isVisible = false">
      ログイン内容の記述
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
