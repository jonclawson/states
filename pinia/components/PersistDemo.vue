<template>
  <div class="card">
    <h3>Persist Demo (counter persisted)</h3>
    <p>Persisted count: <strong>{{ count }}</strong></p>
    <div style="display:flex;gap:8px">
      <button @click="increment()">+1</button>
      <button @click="reset()">reset</button>
    </div>
    <small>Counter state is persisted to localStorage (client).</small>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'
const store = useCounterStore()
const { count } = storeToRefs(store)
const { increment, reset } = store
</script>
