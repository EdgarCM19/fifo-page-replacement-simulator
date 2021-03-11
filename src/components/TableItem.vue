<template>
  <div class="container-item">
    <div class="data">
      {{ pid }}-{{ page }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    pid: String,
    page: Number,
  },
});
</script>

<style scoped>
.container-item {
  border-radius: 16px;
  padding: 8px 16px;
  background-color: #292D32;
  color: #ECF0F3;
  min-width: 30%;
  margin: 8px 4px;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.8),
    inset -2px -2px 4px rgba(255, 255, 255, 0.2);
  transition: 0.3s ease-in-out;
}

/*
.container-item:hover {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8),
    -2px -2px 4px rgba(255, 255, 255, 0.2);
}
*/
</style>
