<template>
  <div>
    <header
      class="w-full h-20 p-4 bg-white flex items-center justify-between max-w-2xl m-auto"
    >
      <h1 class="text-2xl leading-6 tracking-wide font-sans">CoordinateHint</h1>
      <LoginButtonModal v-if="!user.user" />
      <div v-else>
        <img
          :src="user.user ? user.user.image : ''"
          class="w-10 h-10 rounded-2xl"
        />
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import LoginButtonModal from '~/components/Molecules/LoginButtonModal.vue'
import { User } from '~/interface/user'

interface Props {
  user: User
}
const user = defineProps<Props>()
</script>

<style lang="css"></style>
