<template>
  <div class="info-wrapper">
    <div class="current">
      {{store.getters.current()}}
    </div>
    <div class="completed">
      Procesos completados:
      <p>{{store.getters.completed()}}</p>
    </div>
    <div class="page-faults">
      Fallos de pagina: 0
    </div>
      <!-- <button @click="store.methods.nextStep">Next</button> -->
    <!-- <div class="algo">
      <p v-for="(process, index) in store.getters.processes_queue()" :key="index">
        {{process.PID}}
      </p>
    </div> -->
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
.info-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  padding: 8px 8px;
  border: none;
  max-width: 80%;
  background-color: #292D32;
  color: #ECF0F3;
  border-radius: 8px;
  flex-direction: column;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4),
    -2px -2px 4px rgba(255, 255, 255, 0.2);
}
.current {
  border: 2px solid #ecf0f3;
  border-radius: 4px;
  margin: 4px 8px;
  padding: 8px;
  max-width: 80%;
}
</style>
