<template>
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-semibold">Users</h2>
      <Button @click="open = true">Add User</Button>
    </div>

    <Table>
      <tr v-for="(u, idx) in users" :key="u.email" class="border-b border-[#2a2a2a]">
        <td class="px-3 py-2">{{ idx + 1 }}</td>
        <td class="px-3 py-2">{{ u.name }}</td>
        <td class="px-3 py-2">{{ u.email }}</td>
        <td class="px-3 py-2">
          <button class="text-sm underline" @click="edit(u)">Edit</button>
        </td>
      </tr>
    </Table>

    <Modal v-if="open" @close="open=false">
      <template #title><h3>Add User</h3></template>
      <div class="space-y-2">
        <input v-model="form.name" placeholder="Name" class="w-full p-2 bg-[#2a2a2a] rounded" />
        <input v-model="form.email" placeholder="Email" class="w-full p-2 bg-[#2a2a2a] rounded" />
        <div class="flex justify-end">
          <Button @click="save">Save</Button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Table from '../components/Table.vue'
import Modal from '../components/Modal.vue'
import Button from '../components/Button.vue'

const users = ref([ { name: 'Alice', email: 'alice@example.com' }, { name: 'Bob', email: 'bob@example.com' } ])
const open = ref(false)
const form = ref({ name: '', email: '' })

function save(){ users.value.push({ ...form.value }); form.value = { name:'', email:'' }; open.value=false }
function edit(u){ alert('edit ' + u.name) }
</script>
