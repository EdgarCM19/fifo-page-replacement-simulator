<template>
  <div class="container">
    <div class="current">
      <p>Procesos completados: </p>
      <p>{{store.getters.completed()}}</p>
      <button @click="store.methods.nextStep">Next</button>
    </div>
    <div class="algo">
      <p v-for="(process, index) in store.getters.processes_queue()" :key="index">
        {{process.PID}}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

export default defineComponent({
  setup() {
    const store = inject('settings');

    return {
      store,
    };
  },
});
</script>

<style scoped>

</style>
