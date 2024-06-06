<template>
  <div class="w-full h-max flex justify-between items-center">
    <SvgIcon
      id="t-1"
      class="w-50 h-50"
      :name="`i-loader-triangle-brown-${theme}`"
    />
    <SvgIcon
      id="t-2"
      class="w-50 h-50"
      :name="`i-loader-triangle-green-${theme}`"
    />
    <SvgIcon
      id="t-3"
      class="w-50 h-50"
      :name="`i-loader-triangle-brown-${theme}`"
    />
    <SvgIcon
      id="t-4"
      class="w-50 h-50"
      :name="`i-loader-triangle-green-${theme}`"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCommonStore } from "~/stores/common.store";
import { AnimationEnum } from "~/infrastructure/enums/animation.enum";
import {onMounted} from "vue";

interface IProps {
  animation: AnimationEnum;
}

defineOptions({ name: "UILoaderAnimateTriangles" });

withDefaults(defineProps<IProps>(), { animation: AnimationEnum.Pulse });

const commonStore = useCommonStore();
const { theme } = storeToRefs(commonStore);

const { $gsap } = useNuxtApp();

onMounted((): void => {
  $gsap.to('#t-1', { rotation: 180, duration: 1 })
  $gsap.to('#t-2', { rotation: 180, duration: 1 })
  $gsap.to('#t-3', { rotation: 180, duration: 1 })
  $gsap.to('#t-4', { rotation: 180, duration: 1 })
})
</script>