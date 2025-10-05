<template>
  <div class="space-y-6">
    <!-- Top KPIs -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card v-for="(kpi, i) in kpis" :key="i">
        <template #title>
          <div class="flex items-center justify-between">
            <div class="text-sm text-textLight/80">{{ kpi.title }}</div>
            <div class="text-xs text-textLight/60">{{ kpi.sub }}</div>
          </div>
        </template>

        <div class="mt-3 flex items-end justify-between">
          <div>
            <div class="text-2xl font-bold">{{ kpi.value }}</div>
            <div class="text-sm text-textLight/70 mt-1">{{ kpi.change }}</div>
          </div>
          <div class="text-xs px-3 py-1 rounded bg-[#2b2b2b] text-textLight/80">{{ kpi.tag }}</div>
        </div>
      </Card>
    </div>

    <!-- Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="lg:col-span-2">
        <Card>
          <template #title>
            <div class="flex items-center justify-between">
              <div>Traffic & Sales</div>
              <div class="text-sm text-textLight/70">Last 30 days</div>
            </div>
          </template>

          <div class="mt-4">
            <!-- Line chart -->
            <LineChart :chart-data="lineChartData" :chart-options="lineChartOptions" />
          </div>
        </Card>
      </div>

      <div>
        <Card>
          <template #title>
            <div class="flex items-center justify-between">
              <div>Revenue Split</div>
              <div class="text-sm text-textLight/70">This month</div>
            </div>
          </template>

          <div class="mt-4 flex flex-col items-center">
            <DoughnutChart :chart-data="doughnutData" :chart-options="doughnutOptions" />
            <div class="mt-3 w-full space-y-2">
              <div class="flex justify-between text-sm"><span>Product A</span><span class="font-semibold">62%</span></div>
              <div class="flex justify-between text-sm"><span>Product B</span><span class="font-semibold">25%</span></div>
              <div class="flex justify-between text-sm"><span>Other</span><span class="font-semibold">13%</span></div>
            </div>
          </div>
        </Card>
      </div>
    </div>

    <!-- Activities and Quick Actions -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="lg:col-span-2">
        <Card>
          <template #title>
            <div class="flex items-center justify-between">
              <div>Recent Activities</div>
              <div class="text-sm text-textLight/70">Realtime feed</div>
            </div>
          </template>

          <div class="mt-4">
            <Table>
              <template v-for="(a, idx) in activities" :key="idx">
                <tr class="border-b border-[#2a2a2a]">
                  <td class="px-3 py-2 w-14 text-sm text-textLight/70">{{ idx + 1 }}</td>
                  <td class="px-3 py-2 text-sm">{{ a.actor }}</td>
                  <td class="px-3 py-2 text-sm text-textLight/70">{{ a.action }}</td>
                  <td class="px-3 py-2 text-sm text-textLight/60">{{ a.time }}</td>
                </tr>
              </template>
            </Table>
          </div>
        </Card>
      </div>

      <div>
        <Card>
          <template #title>
            <div class="flex items-center justify-between">
              <div>Quick Actions</div>
              <div class="text-sm text-textLight/70">Shortcuts</div>
            </div>
          </template>

          <div class="mt-4 space-y-3">
            <Button @click="openAddUser">Add User</Button>
            <Button @click="generateReport">Generate Report</Button>
            <Button @click="clearCache">Clear Cache</Button>
          </div>
        </Card>
      </div>
    </div>

    <!-- Tasks and Summary -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="lg:col-span-2">
        <Card>
          <template #title>Open Tasks</template>
          <ul class="mt-3 space-y-2">
            <li v-for="(t, i) in tasks" :key="i" class="flex items-center justify-between bg-[#2a2a2a] p-3 rounded">
              <div>
                <div class="font-medium">{{ t.title }}</div>
                <div class="text-xs text-textLight/70">{{ t.desc }}</div>
              </div>
              <div class="flex items-center gap-2">
                <button class="px-2 py-1 rounded bg-[#3a3a3a]" @click="toggleTask(i)">{{ t.done ? 'Done' : 'Done?' }}</button>
                <button class="px-2 py-1 rounded bg-[#4b4b4b]" @click="removeTask(i)">✕</button>
              </div>
            </li>
          </ul>

          <div class="mt-4 flex gap-2">
            <input v-model="newTask" placeholder="New task..." class="flex-1 p-2 bg-[#2a2a2a] rounded" />
            <Button @click="addTask">Add</Button>
          </div>
        </Card>
      </div>

      <div>
        <Card>
          <template #title>Summary</template>
          <div class="mt-3 text-sm text-textLight/80">
            <p>Total users: <b>{{ kpis[0].value }}</b></p>
            <p>Pending tasks: <b>{{ tasks.filter(t=>!t.done).length }}</b></p>
            <p>Server status: <b class="text-green-400">Online</b></p>
          </div>
        </Card>
      </div>
    </div>

    <!-- Add User Modal (simple demo) -->
    <Modal v-if="showAddUser" @close="showAddUser = false">
      <template #title><h3>Add new user</h3></template>
      <div class="space-y-2">
        <input v-model="newUser.name" placeholder="Name" class="w-full p-2 bg-[#2a2a2a] rounded" />
        <input v-model="newUser.email" placeholder="Email" class="w-full p-2 bg-[#2a2a2a] rounded" />
        <div class="flex justify-end">
          <Button @click="saveUser">Save</Button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Card from '@/components/Card.vue'
import Table from '@/components/Table.vue'
import Button from '@/components/Button.vue'
import Modal from '@/components/Modal.vue'

// Chart.js + vue-chartjs
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

import { Line, Doughnut } from 'vue-chartjs'

// Create small wrapper components so props naming matches usage
const LineChart = (props) => ({
  components: { Line },
  props: ['chartData', 'chartOptions'],
  setup(p) { return () => h(Line, { chartData: p.chartData, chartOptions: p.chartOptions }) }
})
const DoughnutChart = (props) => ({
  components: { Doughnut },
  props: ['chartData', 'chartOptions'],
  setup(p) { return () => h(Doughnut, { chartData: p.chartData, chartOptions: p.chartOptions }) }
})

// Sample data
const kpis = ref([
  { title: 'Users', value: '1,234', change: '+3.2%', tag: 'active', sub: 'all time' },
  { title: 'Sales', value: '$12,345', change: '+1.8%', tag: 'monthly', sub: '30d' },
  { title: 'Visits', value: '9,012', change: '-0.5%', tag: 'weekly', sub: '7d' },
  { title: 'Tasks', value: '24', change: '+2', tag: 'open', sub: 'now' }
])

// Line chart data
const lineChartData = {
  labels: Array.from({length: 12}, (_,i)=>`D-${12-i}`),
  datasets: [
    {
      label: 'Visits',
      data: [120,200,150,220,300,280,350,400,370,420,460,500],
      borderColor: '#6C63FF',
      backgroundColor: 'rgba(108,99,255,0.08)',
      tension: 0.35,
      fill: true
    },
    {
      label: 'Sales',
      data: [30,60,40,80,120,100,150,160,140,170,190,220],
      borderColor: '#22C55E',
      backgroundColor: 'rgba(34,197,94,0.06)',
      tension: 0.35,
      fill: true
    }
  ]
}

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: '#E0E0E0' } }
  },
  scales: {
    x: { ticks: { color: '#CFCFCF' }, grid: { color: '#2a2a2a' } },
    y: { ticks: { color: '#CFCFCF' }, grid: { color: '#2a2a2a' } }
  }
}

// Doughnut data
const doughnutData = {
  labels: ['Product A','Product B','Other'],
  datasets: [
    { data: [62,25,13], backgroundColor: ['#6C63FF','#22C55E','#F97316'] }
  ]
}
const doughnutOptions = { responsive: true, plugins: { legend: { labels: { color: '#E0E0E0' } } } }

// Activities & tasks
const activities = ref([
  { actor: 'Alice', action: 'Created invoice #982', time: '2m ago' },
  { actor: 'System', action: 'Backup completed', time: '10m ago' },
  { actor: 'Bob', action: 'Updated user settings', time: '1h ago' }
])

const tasks = ref([
  { title: 'Review PR #32', desc: 'Check tests and merge', done: false },
  { title: 'Prepare release notes', desc: 'v0.3.0', done: false }
])

// Modal / actions state
const showAddUser = ref(false)
const newUser = reactive({ name: '', email: '' })
const newTask = ref('')

function openAddUser(){ showAddUser.value = true }
function saveUser(){
  if(!newUser.name || !newUser.email) { alert('Fill name & email'); return }
  activities.value.unshift({ actor: newUser.name, action: 'Added new user', time: 'just now' })
  newUser.name = ''; newUser.email = ''; showAddUser.value = false
}

function generateReport(){ alert('Generate report (demo)'); }
function clearCache(){ alert('Cache cleared (demo)'); }

function addTask(){
  if(!newTask.value) return
  tasks.value.push({ title: newTask.value, desc: '', done: false })
  newTask.value = ''
}
function toggleTask(i){ tasks.value[i].done = !tasks.value[i].done }
function removeTask(i){ tasks.value.splice(i,1) }
</script>

<style scoped>
/* make chart containers have fixed heights */
.LineChart, .DoughnutChart {
  width: 100%;
}
.card-chart {
  height: 280px;
}
</style>
