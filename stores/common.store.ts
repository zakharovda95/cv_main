import { defineStore } from 'pinia';
import type { ICommonStoreState } from '~/interfaces/stores.inerfaces';

export const useCommonStore = defineStore('common', {
  state: (): ICommonStoreState => ({
    theme: 'dark',
  }),
  actions: {},
  getters: {},
});
