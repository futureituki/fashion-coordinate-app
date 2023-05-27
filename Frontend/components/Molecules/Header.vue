<template>
  <div class="w-full bg-white">
    <header class="h-20 p-4 flex items-center justify-between max-w-2xl m-auto">
      <h1 class="text-2xl leading-6 tracking-wide font-sans">
        <nuxt-link to="/"> CoordinateHint </nuxt-link>
      </h1>
      <LoginButtonModal v-if="!user.user" />
      <div class="relative" v-else>
        <img
          :src="user.user ? user.user.image : ''"
          class="w-12 h-12 rounded-full cursor-pointer"
          @click="visible = !visible"
        />
        <Menu :visible="visible" class="-left-20">
          <li
            v-for="icon in menuIcon"
            :key="icon.icon"
            class="hover:opacity-75 hover:bg-gray-100 opacity-100 p-3 cursor-pointer"
            :class="
              icon.text === 'ログアウト' ? 'border-t-2 w-full pt-2 pb-2' : ''
            "
          >
            <nuxt-link :to="icon.name">
              <span class="pr-2"><font-awesome-icon :icon="icon.icon" /></span>
              {{ icon.text }}
            </nuxt-link>
          </li>
        </Menu>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginButtonModal from '~/components/Molecules/LoginButtonModal.vue'
import Menu from '~/components/Atoms/Menu.vue'
import { User } from '~/interface/user'

interface Props {
  user: User
}
const visible = ref(false)
const menuIcon = [
  { icon: 'user', text: 'マイページ', name: 'mypage' },
  { icon: 'gear', text: '設定', name: 'setting' },
  { icon: 'right-from-bracket', text: 'ログアウト', name: 'logout' },
]
const user = defineProps<Props>()
</script>

<style lang="css"></style>
