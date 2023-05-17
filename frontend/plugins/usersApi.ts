import { defineNuxtPlugin } from "#app/nuxt";
import { useRuntimeConfig } from "nuxt/app";
import nuxtStorage from 'nuxt-storage'

export default defineNuxtPlugin(nuxt => {

    const runtimeConfig = useRuntimeConfig()
    const BASE_URL: string = runtimeConfig.public.apiBase

    const headers: object = {
        'Content-Type': 'application/json'
    }

    const token = nuxtStorage.localStorage.getData('token')
    if (token) {
        headers.Authorization = token
    }

    return {
        provide: {
            get: async (url: string) => {
                return await $fetch(`${BASE_URL}${url}`, { method: "GET", headers })
            },
            post: async (url: string, payload: object) => {
                return await $fetch(`${BASE_URL}${url}`, {
                    method: "POST",
                    headers,
                    body: { ...payload }
                })
            }
        }
    }
})
