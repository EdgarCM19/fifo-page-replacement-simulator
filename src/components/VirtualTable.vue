<template>
  <div class="info-wrapper">
    <TableItem v-for="(i, key) in settings.getters.virtualMemory()"
    :key="key" :info="i" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import TableItem from '@/components/TableItem.vue';

export default defineComponent({
  components: {
    TableItem,
  },
  setup() {
    const settings = inject('settings');
    return {
      settings,
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
  min-width: 10%;
  background-color: #292D32;
  color: #ECF0F3;border-radius: 8px;
  flex-direction: column;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5),
    -2px -2px 4px rgba(255, 255, 255, 0.2);
}
</style>
