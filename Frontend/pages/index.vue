<template>
  <div>
    <Header :user="user" />
    <MainVisual />
    <section class="mt-14 mb-8">
      <div class="mt-4 mb-4 grid place-items-center">
        <span class="leading-4 tracking-wide font-bold"
          >さっそくコーデを見てみよう</span
        >
      </div>
      <Tab :activeItem="activeItem" :tabItems="tabItems" :click="setItem" />
      <div class="mt-14 mb-14">
        <div class="flex gap-10 justify-center flex-wrap">
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
      <nuxt-link to="/mypage">test</nuxt-link>
    </section>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import MainVisual from '~/components/Atoms/MainVisualCard.vue'
import Header from '~/components/Molecules/Header.vue'
import Tab from '~/components/Molecules/TabBar.vue'
import ImageCard from '~/components/Atoms/ImageCard.vue'
import { useFetchMe } from '~/composable/client/useFetchMe'
import { useUser } from '~/stores/userStore'
import { toastSuccessHandler } from '~/lib/toastHandler'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SubmitButton from '~/components/Atoms/SubmitButton.vue'
const activeItem = ref(1)
const router = useRouter()
const { user } = storeToRefs(useUser())
const tabItems = [
  { tabId: 1, tabName: '人気' },
  { tabId: 2, tabName: '新着' },
]
const setItem = (id: number) => {
  activeItem.value = id
}
onMounted(async () => {
  // const data = await fetch('http://localhost:8080/user', {
  //   method:'GET',
  //   credentials: 'include',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   }
  // })
  // const user = await data.json()
  // expressリダイレクトの場合は、router.currentRoute.value.query.codeで取得できる
  await useFetchMe()
})
</script>
