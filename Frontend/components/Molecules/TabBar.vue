<template>
  <div class="mt-10">
    <ul class="gap-6 flex items-center justify-center text-lg">
      <li
        v-for="item in props.tabItems"
        :key="item.tabId"
        class="w-fit rounded-md mr-4 pb-2"
        :class="[props.activeItem === item.tabId ? 'underline-offset-2' : '']"
      >
        <button>{{ item.tabName }}</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  activeItem: number
  tabItems: {
    tabId: number
    tabName: string
    click?: () => void
  }[]
}

const props = defineProps<Props>()
</script>

<style lang="css"></style>
