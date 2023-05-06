<template>
  <div>
    {{ user ? user.name : 'no-user' }}
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useUser } from '~/stores/userStore'
onMounted(() => {
  const user = useUser().user
  if (!user) {
    useRouter().push('/top')
  }
})
</script>
