<template>
  <div class="main">
    <div class="main-app">
      <div class="about">
        <InfoPanel></InfoPanel>
        <ProcessesTable></ProcessesTable>
      </div>
      <PhysicaTable></PhysicaTable>
      <VirtualTable></VirtualTable>
    </div>
    <div class="control-buttons">
      <Button :on_click_fn="store.methods.nextStep">Next</Button>
    </div>
    <!-- <router-link to="/">
      <button>
        Holis
      </button>
    </router-link> -->
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */
import { defineComponent, inject } from 'vue';
import InfoPanel from '@/components/InfoPanel.vue';
import ProcessesTable from '@/components/ProcessesTable.vue';
import VirtualTable from '@/components/VirtualTable.vue';
import PhysicaTable from '@/components/PhysicalTable.vue';
import Button from '@/components/Button.vue';

export default defineComponent({
  components: {
    InfoPanel,
    ProcessesTable,
    VirtualTable,
    PhysicaTable,
    Button,
  },
  setup() {
    const store = inject('settings');
    return {
      store,
    };
  },
});
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  min-width: 100%;
}

.main .main-app {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.about {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
}
</style>
