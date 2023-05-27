<template>
  <section>
    <Header :user="user" />
    <div class="">
      <header class="w-full pt-12 pb-12 border-t-2">
        <div class="flex gap-4 items-center max-w-2xl m-auto">
          <div class="w-16">
            <img
              :src="user && user.image"
              alt="ユーザーの画像"
              class="w-full h-full rounded-full object-cover"
            />
          </div>
          <h1 class="text-lg leading-3">{{ user && user.name }}</h1>
        </div>
      </header>
      <button
        type="button"
        class="-mr-2.5 -mt-0.5 p-1 flex aspect-square w-7 transition-all items-center justify-center rounded-full text-gray-400 hover:bg-gray-50 hover:text-body"
      >
        <svg
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 24 24"
          fill="none"
          stroke-linecap="round"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
          class="w-4.5"
        >
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="12" cy="5" r="1"></circle>
          <circle cx="12" cy="19" r="1"></circle>
        </svg>
      </button>
      <div class="mt-14 mb-14">
        <div class="flex gap-10 justify-center flex-wrap">
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useUser } from '~/stores/userStore'
import Header from '~/components/Molecules/Header.vue'
import ImageCard from '~/components/Atoms/ImageCard.vue'
import Button from '~/components/Atoms/SubmitButton.vue'
const user = useUser().user
// if(!user) {
//   useRouter().push('/')
// }
const menuIcon = [
  { icon: 'clothe', text: 'コーデを編集', name: 'code' },
  {
    icon: 'crush',
    text: 'コーデを削除',
    name: 'delete',
    color: 'text-red-300',
  },
]
</script>
