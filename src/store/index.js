import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const sidebarCollapsed = ref(false)
  const dark = ref(true)
  function toggleSidebar(){ sidebarCollapsed.value = !sidebarCollapsed.value }
  function toggleDark(){ dark.value = !dark.value; document.documentElement.classList.toggle('dark', dark.value) }
  return { sidebarCollapsed, toggleSidebar, dark, toggleDark }
})
