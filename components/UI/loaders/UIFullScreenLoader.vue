<template>
  <div
    class="w-full h-svh absolute z-50 inset-0 flex items-center justify-center px-3 lg:px-0 bg-bgDarkPrimary"
  >
    <div class="flex flex-col justify-center items-center w-200">
      <SvgIcon
        v-if="loader === LoaderEnum.Painted"
        class="w-200 h-200"
        :name="`i-loader-squares-${theme}`"
      />
      <SvgIcon
        v-else-if="loader === LoaderEnum.Ghost"
        class="w-200 h-200"
        :name="`i-loader-squares-opacity-${theme}`"
      />
      <div class="w-full h-max my-6">
        <UILoaderAnimateTriangles />
      </div>
      <span
          v-if="isLoaderAnimationFinished"
        class="uppercase text-xl font-light text-brandBrownPrimary animate-pulse"
        >
        Press Enter
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import UILoaderAnimateTriangles from "~/components/UI/loaders/UILoaderAnimateTriangles.vue";
import { useCommonStore } from "~/stores/common.store";
import { storeToRefs } from "pinia";
import { LoaderEnum } from "~/infrastructure/enums/loader.enum";

interface IProps {
  loader: LoaderEnum;
}

defineOptions({ name: "UIFullScreenLoader" });

withDefaults(defineProps<IProps>(), { loader: LoaderEnum.Ghost });

const commonStore = useCommonStore();
const { theme } = storeToRefs(commonStore);

const isLoaderAnimationFinished = ref(false)
const loaderDurationSec = 5

onMounted((): void => {
  setTimeout((): void => {
    isLoaderAnimationFinished.value = true;
  }, loaderDurationSec * 1000)
})
</script>