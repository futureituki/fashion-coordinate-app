<template>
  <button class="w-full rounded p-2" :class="[props]">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  props: string
  type: 'submit' | 'button' | 'reset'
}
// TODO プライマリーカラーが決まったらデフォルトはプライマリーカラーにする
withDefaults(defineProps<Props>(), {
  props: '',
})
</script>

<style scoped></style>
