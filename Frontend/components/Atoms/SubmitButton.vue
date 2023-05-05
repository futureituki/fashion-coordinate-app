<template>
  <button class="w-full rounded p-2" :class="[props]">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  props: string
}
// TODO プライマリーカラーが決まったらデフォルトはプライマリーカラーにする
withDefaults(defineProps<Props>(), {
  props: '',
})
</script>

<style scoped></style>
