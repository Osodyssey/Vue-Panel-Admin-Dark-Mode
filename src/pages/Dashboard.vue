<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <Card>
      <template #title>Quick Stats</template>
      <div class="grid grid-cols-3 gap-3">
        <div class="p-3 bg-[#2a2a2a] rounded">Users<br/><b>1,234</b></div>
        <div class="p-3 bg-[#2a2a2a] rounded">Sales<br/><b>567</b></div>
        <div class="p-3 bg-[#2a2a2a] rounded">Visits<br/><b>9,012</b></div>
      </div>
    </Card>

    <div class="lg:col-span-2">
      <Card>
        <template #title>Activity</template>
        <p class="text-sm text-textLight/80">Sample activity feed or charts go here.</p>
      </Card>
    </div>
  </div>
</template>

<script setup>
import Card from '../components/Card.vue'
</script>
