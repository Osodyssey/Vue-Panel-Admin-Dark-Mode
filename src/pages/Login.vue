<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Sign in</h2>
    <form @submit.prevent="login" class="space-y-3">
      <input v-model="username" placeholder="username" class="w-full p-2 bg-[#2a2a2a] rounded" />
      <input v-model="password" placeholder="password" type="password" class="w-full p-2 bg-[#2a2a2a] rounded" />
      <div class="flex justify-end">
        <Button type="submit">Login</Button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from '../components/Button.vue'
import { useRouter } from 'vue-router'
const username = ref('admin')
const password = ref('password')
const router = useRouter()
function login(){ /* demo-login */ router.push('/') }
</script>
