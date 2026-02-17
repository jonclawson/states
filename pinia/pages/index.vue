<template>
  <div class="container">
    <h1>Nuxt 3 + Pinia — demo</h1>

    <Counter />
    <SubscriptionDemo />
    <Todos />
    <PersistDemo />

    <div class="card">
      <h3>Notes</h3>
      <ul>
        <li>Use getters to compute derived state (see `double`).</li>
        <li>Actions can be async — server-side hydration works with Pinia in Nuxt.</li>
        <li>Use `store.$subscribe` for external listeners or telemetry.</li>
        <li>`pinia-plugin-persistedstate` persists selected store paths to localStorage (client-only).</li>
      </ul>
    </div>

    <nuxt-link to="/ssr">SSR hydration example →</nuxt-link>
  </div>
</template>

<script setup lang="ts">
import Counter from '~/components/Counter.vue'
import Todos from '~/components/Todos.vue'
import PersistDemo from '~/components/PersistDemo.vue'
import SubscriptionDemo from '~/components/SubscriptionDemo.vue'
</script>
