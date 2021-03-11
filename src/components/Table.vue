<template>
  <div class="container">
    <TableItem v-for="(i, key) in size" :key="key" :pid="i" :page="i" />
  </div>
</template>

<script lang="ts">
import TableItem from '@/components/TableItem.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    TableItem,
  },
  props: {
    table_direction: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    return {
    };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 8px 16px;
  background-color: #292D32;
  color: #ECF0F3;
  margin: 8px 8px;
  flex-direction: column;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8),
    -2px -2px 4px rgba(255, 255, 255, 0.2);
}
</style>
