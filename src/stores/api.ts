import {defineStore} from "pinia";

interface State {
    baseUrl: string
}

export const useBaseUrlStore = defineStore('url', {
    state: (): State => {
        return {
            baseUrl: 'https://jurapro.bhuser.ru/api-shop/'
        }
    }
})