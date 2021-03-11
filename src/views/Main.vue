<template>
  <div class="about">
    <InfoPanel></InfoPanel>
    <router-link to="/">
      <button>
        Holis
      </button>
    </router-link>
    <button @click="nextStep()">Next</button>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */
import { defineComponent, inject } from 'vue';
import InfoPanel from '@/components/InfoPanel.vue';

export default defineComponent({
  components: {
    InfoPanel,
  },
  setup() {
    const store = inject('settings');
    return {
      store,
    };
  },
});
</script>
