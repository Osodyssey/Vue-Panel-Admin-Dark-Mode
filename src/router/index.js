import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '../layouts/AdminLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import Dashboard from '../pages/Dashboard.vue'
import Users from '../pages/Users.vue'
import Reports from '../pages/Reports.vue'
import Settings from '../pages/Settings.vue'
import Login from '../pages/Login.vue'

const routes = [
  { path: '/login', component: AuthLayout, children: [{ path: '', component: Login }] },
  { path: '/', component: AdminLayout, children: [
    { path: '', component: Dashboard },
    { path: 'users', component: Users },
    { path: 'reports', component: Reports },
    { path: 'settings', component: Settings }
  ]}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
