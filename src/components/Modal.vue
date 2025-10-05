<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center">
    <div class="bg-bgSecondary p-4 rounded w-full max-w-lg">
      <div class="flex justify-between items-center mb-3"><slot name="title" /><button @click="$emit('close')">✕</button></div>
      <div><slot /></div>
    </div>
  </div>
</template>
