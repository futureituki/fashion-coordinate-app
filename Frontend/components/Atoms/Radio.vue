<template>
  <li class="w-full border-gray-200 p-1 sm:border-r">
    <div class="flex items-center pl-3">
      <input
        type="radio"
        :id="modelName"
        :value="modelName"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.value)"
        name="list-radio"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        :for="modelName"
        class="w-full py-3 ml-2 text-sm font-medium text-gray-900"
        >{{ displayName }}</label
      >
    </div>
  </li>
</template>
<script setup lang="ts">
interface Props {
  modelValue: string
  displayName: string
  modelName: string
}
withDefaults(defineProps<Props>(), {
  modelValue: '',
  modelName: '',
  displayName: '',
})
const $emit = defineEmits(['update:modelValue'])
</script>
<style scoped lang="css"></style>
