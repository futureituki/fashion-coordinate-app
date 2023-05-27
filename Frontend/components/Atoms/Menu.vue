<template>
  <div
    class="absolute shadow-lg w-max h-max transition-all"
    :class="
      visible ? 'opacity-100' : 'opacity-0 pointer-events-none before:opacity-0'
    "
  >
    <div
      class="relative ease-linear max-w-[400px] border-2 bg-white rounded-md transition-all"
      :class="visible ? 'translate-y-0' : 'translate-y-6'"
    >
      <ul>
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  visible: boolean
}
withDefaults(defineProps<Props>(), {
  visible: true,
})
</script>
