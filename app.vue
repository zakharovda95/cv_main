<template>
  <Head>
    <Title>Dmitry Zakharov</Title>
    <Link href="https://fonts.googleapis.com" rel="preconnect" />
    <Link href="https://fonts.gstatic.com" rel="preconnect" />
    <Link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <Meta name="description" content="Тест" />
    <Meta property="og:image" content="/public/favicon.ico" />
    <Meta property="og:type" content="website" />
    <Meta property="twitter:image" content="/public/favicon.ico" />
    <Meta charset="UTF-8" />
  </Head>

  <div
    :class="theme"
    class="min-h-svh bg-bgLightPrimary dark:bg-bgDarkPrimary text-textLightPrimary dark:text-textDarkPrimary"
  >
    <DefaultHeader />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import DefaultHeader from '~/components/layouts/DefaultHeader.vue';
import { useCommonStore } from '~/stores/common.store';
const commonStore = useCommonStore();
const { theme } = storeToRefs(commonStore);
</script>
