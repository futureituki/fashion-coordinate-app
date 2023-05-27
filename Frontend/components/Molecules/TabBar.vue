<template>
  <div class="mt-10">
    <ul class="gap-6 flex items-center justify-center text-lg">
      <li
        v-for="item in tabItems"
        :key="item.tabId"
        class="w-fit rounded-full mr-4 pb-1 pt-1 pr-3 pl-3 transition-all text-gray-400"
        :class="[
          activeItem === item.tabId
            ? 'underline text-white bg-red-400'
            : 'hover:bg-white',
        ]"
        @click="click(item.tabId)"
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
  }[]
  click?: (id: number) => void
}

defineProps<Props>()
</script>

<style lang="css"></style>
