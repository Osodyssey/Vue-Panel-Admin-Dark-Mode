<template>
  <div class="bg-bgSecondary p-3 rounded">
    <div class="overflow-x-auto">
      <table class="min-w-full text-left">
        <thead><tr class="text-sm text-textLight/80"><th class="px-3 py-2">#</th><th class="px-3 py-2">Name</th><th class="px-3 py-2">Email</th><th class="px-3 py-2">Actions</th></tr></thead>
        <tbody><slot /></tbody>
      </table>
    </div>
  </div>
</template>
