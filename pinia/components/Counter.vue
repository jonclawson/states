<template>
  <div class="card">
    <h3>Counter</h3>
    <p><strong>{{ count }}</strong></p>
    <div style="display:flex;gap:8px">
      <button @click="increment()">+1</button>
      <button @click="decrement()">-1</button>
      <button @click="increment(5)">+5</button>
      <button @click="asyncIncrement(3)">async +3</button>
      <button @click="reset()">reset</button>
    </div>
    <small>Double (getter): {{ double }}</small>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'
const store = useCounterStore()
const { count, double } = storeToRefs(store)
const { increment, decrement, reset, asyncIncrement } = store
</script>
