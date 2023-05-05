<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 before:content[''] before:absolute before:w-full before:h-full before:content before:backdrop-blur-sm before:transition-all"
    :class="
      visible
        ? 'opacity-100 before:opacity-100'
        : 'opacity-0 pointer-events-none before:opacity-0'
    "
  >
    <div
      class="p-6 relative max-w-[500px] border-2 w-10/12 bg-white rounded-md transition-all"
      :class="visible ? 'translate-y-0' : 'translate-y-96'"
    >
      <div class="text-center">
        <slot></slot>
      </div>
    </div>
    <button
      class="before:content[''] before:absolute before:top-8 before:right-10 before:w-0.5 before:h-9 before:bg-black before:rounded-sm before:-translate-x-1/2 before:-translate-y-1/2 before:-rotate-45 after:content[''] after:absolute after:top-8 after:right-10 after:w-0.5 after:h-9 after:bg-black after:rounded-sm after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45"
      @click="$emit('close')"
    ></button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  visible: boolean
}
withDefaults(defineProps<Props>(), {
  visible: false,
})
const $emit = defineEmits(['update:visible'])
</script>
