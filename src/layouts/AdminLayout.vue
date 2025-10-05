<template>
  <div class="flex h-screen text-textLight">
    <aside :class="['transition-all duration-200', ui.sidebarCollapsed ? 'w-16' : 'w-64']" class="bg-bgSecondary">
      <div class="p-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded bg-accent"></div>
          <span v-if="!ui.sidebarCollapsed" class="font-bold">Oodi Admin</span>
        </div>
        <button @click="ui.toggleSidebar" class="p-1 rounded hover:bg-[#424242]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/></svg>
        </button>
      </div>
      <nav class="mt-6">
        <router-link to="/" class="block px-4 py-2 hover:bg-[#424242]">Dashboard</router-link>
        <router-link to="/users" class="block px-4 py-2 hover:bg-[#424242]">Users</router-link>
        <router-link to="/reports" class="block px-4 py-2 hover:bg-[#424242]">Reports</router-link>
        <router-link to="/settings" class="block px-4 py-2 hover:bg-[#424242]">Settings</router-link>
      </nav>
    </aside>

    <div class="flex-1 bg-bgPrimary">
      <header class="flex items-center justify-between p-4 border-b border-[#2a2a2a]">
        <div class="flex items-center gap-4">
          <button @click="ui.toggleSidebar" class="p-2 rounded hover:bg-[#424242]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/></svg>
          </button>
          <h1 class="text-lg font-semibold">Admin Panel</h1>
        </div>
        <div class="flex items-center gap-3">
          <button @click="ui.toggleDark" class="px-3 py-1 rounded bg-[#2b2b2b] hover:bg-[#3a3a3a]">Toggle Dark</button>
          <div class="w-8 h-8 rounded-full bg-[#4b4b4b]"></div>
        </div>
      </header>

    <!-- Main content -->
    <main class="flex-1 p-6 overflow-y-auto">
      <router-view /> <!-- ⚠️ این خط الزامی است -->
    </main>
    </div>
  </div>
</template>

<script setup>
import { useUiStore } from '../store'
const ui = useUiStore()
</script>

<style scoped>
a { color: inherit; text-decoration: none; }
</style>
