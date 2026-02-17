<template>
  <div class="card">
    <h3>Subscription Demo</h3>
    <p>Last count observed: <strong>{{ last }}</strong></p>
    <small>Updates via <code>store.$subscribe</code> without using a reactive getter in template.</small>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { useCounterStore } from '~/stores/counter'
const last = ref<number | null>(null)
const store = useCounterStore()

const unsub = store.$subscribe((mutation, state) => {
  last.value = state.count
})
onUnmounted(() => unsub())
</script>
