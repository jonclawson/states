<template>
  <div class="container">
    <h1>SSR hydration with Pinia</h1>
    <div class="card">
      <p>Todos below were fetched on the server and hydrated into the Pinia store.</p>
      <Todos />
    </div>
  </div>
</template>

<script setup lang="ts">
import Todos from '~/components/Todos.vue'
import { useTodoStore } from '~/stores/todo'

const todoStore = useTodoStore()
// run on server during SSR to populate the store — this state is serialized and hydrated on client
if (process.server) {
  await todoStore.fetchSample()
}
</script>
