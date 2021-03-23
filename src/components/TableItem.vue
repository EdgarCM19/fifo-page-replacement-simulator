<template>
  <div class="container-item">
    <div class="data">
      {{ info }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // props: {
  //   pid: String,
  //   page: Number,
  // },
  props: {
    info: String,
  },
});
</script>

<style scoped>
.container-item {
  border-radius: 16px;
  padding: 8px 16px;
  background-color: #292D32;
  color: #ECF0F3;
  min-width: 65%;
  margin: 2px;
  box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.45),
    inset -2px -2px 6px rgba(255, 255, 255, 0.12);
  transition: 0.3s ease-in-out;
}

/*
.container-item:hover {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8),
    -2px -2px 4px rgba(255, 255, 255, 0.2);
}
*/
</style>
