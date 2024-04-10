import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useStore = defineStore('store', () => {
    const count = ref(0);
    return { count }
})