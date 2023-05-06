<template>
  <div>
    {{ user ? user.name : 'no-user' }}
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUser } from '~/stores/userStore'
const user = useUser().user
</script>
