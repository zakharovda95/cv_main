<template>
  <div>
    <button @click="theme === 'light' ? (theme = 'dark') : (theme = 'light')">Сменить Тему</button>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '~/stores/common.store';
import { storeToRefs } from 'pinia';

const commonStore = useCommonStore();
const { theme } = storeToRefs(commonStore);
</script>
