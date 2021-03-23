<template>
  <button class="btn"
          @click="on_click_fn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    on_click_fn: {
      type: Function,
      required: true,
    },
  },
  setup(props, { emit }) {
    function callback() {
      // eslint-disable-next-line no-console
      console.log('PTOOO');
      emit('click');
    }

    return {
      callback,
    };
  },
});

</script>

<style scoped>
.btn {
  padding: 8px 16px;
  margin: 8px;
  border: none;
  border-radius: 8px;
  background-color: #292d32;
  color: #ecf0f3;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5),
            -2px -2px 6px rgba(255, 255, 255, 0.15);
}
</style>
