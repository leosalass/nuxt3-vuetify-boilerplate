import { defineStore } from 'pinia'

export const useApiStore = defineStore({
  id: 'api-store',
  state: () => {
    return {
      errorMessages: ['youtube', 'twitch'],
    }
  },
  actions: {
    addError(value: string) {
      this.errorMessages.push(value)
    },
    removeError(value: number){
      this.errorMessages.splice(value, 1);
    },
    cleanErrorMessages(){
      this.errorMessages = [];
    }
  },
  getters: {
    getErrorMessages: state => state.errorMessages,
  },
})