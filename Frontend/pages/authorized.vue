<template>
  <div>
    認証に成功しました！
  </div>
</template>

<script setup lang="ts">
import { get } from 'http'
import { onMounted } from 'vue'
import { useLoginAuthorized } from '~/store/authorizeStore'
onMounted(() => {
  //google認証成功画面
  //authorize storeに値を保存する //
  const router = useRouter()
  const { setAuthorize, getAuthorize } = useLoginAuthorized()
  if(getAuthorize()) {
    router.push('/')
  }  else {
    setAuthorize(true)
    router.push('/')
  }
})
</script>
