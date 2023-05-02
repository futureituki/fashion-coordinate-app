<template>
  <div class="mx-10 my-3">
    <button class="w-full rounded p-2 text-white" :class="[bgColor]">
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
