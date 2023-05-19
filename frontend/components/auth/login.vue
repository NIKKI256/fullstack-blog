<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input v-model="formData.email" id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="mt-2">
            <input v-model="formData.password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button @click="login" :disabled="checkPrimitiveArgs(formData.email, formData.password)" type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:bg-indigo-600">Sign in</button>
        </div>
      </div>

      <p class="mt-10 text-center text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer" @click="$emit('goToRegistration')">
        Don`t have an account yet?
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useCheckEmptyArgs } from '@/composables/checkEmptyArgs'
import nuxtStorage from 'nuxt-storage'

const { $post } = useNuxtApp()
const { checkPrimitiveArgs } = useCheckEmptyArgs()

const formData = reactive({
  email: '',
  password: ''
})

const login = async () => {
  try {
    const { token } = await $post('/apiUsers/login', formData)
    nuxtStorage.localStorage.setData('token', token, 24, 'h')
  } catch (e) {
    const { message } = e.data
    console.error(message)
  }
}
</script>
