<template>
  <div class="w-full h-svh absolute z-50 inset-0 bg-secondary flex items-center justify-center px-3 lg:px-0">
    <div class="w-full max-w-2xl h-1/4 overflow-hidden border border-gray-700 rounded-md">
      <div class="w-full h-1/3 bg-primary"></div>
      <div class="w-full h-1/3 bg-primary"></div>
      <div class="w-full h-1/3 bg-primary"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'UIFullScreenLoader' });
</script>
