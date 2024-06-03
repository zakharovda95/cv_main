import { defineStore } from 'pinia';
import type { ICommonStoreState } from '~/interfaces/stores.inerfaces.ts';

export const useCommonStore = defineStore('common', {
  state: (): ICommonStoreState => ({
    theme: 'light',
  }),
  actions: {},
  getters: {},
});
