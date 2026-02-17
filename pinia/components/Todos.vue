<template>
  <div class="card">
    <h3>Todos</h3>

    <div style="display:flex;gap:8px;margin-bottom:8px">
      <input v-model="text" placeholder="New todo" />
      <button @click="addTodo">Add</button>
      <button @click="fetchSample">Fetch sample</button>
    </div>

    <ul>
      <li v-for="t in todos" :key="t.id" style="display:flex;gap:8px;align-items:center">
        <input type="checkbox" :checked="t.done" @change="toggle(t.id)" />
        <span :style="{ textDecoration: t.done ? 'line-through' : 'none' }">{{ t.text }}</span>
        <button style="margin-left:auto" @click="remove(t.id)">Remove</button>
      </li>
    </ul>

    <small>Unfinished: {{ unfinishedCount }}</small>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '~/stores/todo'
const store = useTodoStore()
const text = ref('')

const { todos, unfinishedCount, loading } = storeToRefs(store)
const { add, toggle, remove, fetchSample } = store

function addTodo() {
  if (!text.value.trim()) return
  add(text.value.trim())
  text.value = ''
}
</script>
