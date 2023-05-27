<template>
  <input
    :value="modelValue"
    class="border-2 px-2 border-solid border-gray-200 focus:border-black rounded-md h-11 w-full outline-none appearance-none text-sm"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script setup lang="ts">
interface Props {
  modelValue: string
}
withDefaults(defineProps<Props>(), {
  modelValue: '',
})
const $emit = defineEmits(['update:modelValue'])
</script>
<style scoped lang="css"></style>
