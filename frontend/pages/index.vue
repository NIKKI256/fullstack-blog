<template>
  <div>
    <auth-login v-if="isLogin" @goToRegistration="toggleAuth"/>
    <auth-registration v-else @goToLogin="toggleAuth"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isLogin = ref(true)

const toggleAuth = () => {
  isLogin.value = !isLogin.value
}
</script>
