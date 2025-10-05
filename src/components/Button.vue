<template>
  <button :class="['px-3 py-1 rounded bg-accent text-white hover:opacity-90', className]" @click="$emit('click')"><slot /></button>
</template>
<script setup>
defineProps({ className: { type: String, default: '' } })
</script>
