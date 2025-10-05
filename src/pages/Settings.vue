<template>
  <div class="space-y-4">
    <h2 class="text-xl font-semibold">Settings</h2>
    <Card>
      <template #title>Appearance</template>
      <div class="flex items-center gap-3">
        <label class="flex items-center gap-2"><input type="checkbox" v-model="dark" @change="toggle" /> Dark Mode</label>
      </div>
    </Card>
  </div>
</template>

<script setup>
import Card from '../components/Card.vue'
import { useUiStore } from '../store'
const ui = useUiStore()
const dark = ui.dark
function toggle(){ ui.toggleDark() }
</script>
