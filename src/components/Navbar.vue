<template>
  <div class="flex items-center gap-3">
    <input v-model="q" placeholder="Search..." class="bg-[#2a2a2a] px-3 py-1 rounded" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
const q = ref('')
</script>
