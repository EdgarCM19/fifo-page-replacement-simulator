<template>
  <div class="input-wrapper">
    <label for="">
      <slot></slot>
    </label>
    <input
      type="text"
      :placeholder="placeholder"
      v-model="input_val"
    >
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
  },
  setup(props, { emit }) {
    const value_handler = {
      get() {
        return props.value;
      },
      set(val: string) {
        emit('update:modelValue', val);
      },
    };
    const input_val = computed(value_handler);

    return {
      input_val,
    };
  },
});
</script>

<style scoped>
.input-wrapper {
  padding: 8px;
  margin: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;
}

input {
  margin: 4px 0;
  border: none;
  border-radius: 8px;
  background-color: #292d32;
  color: #ecf0f3;
  padding: 8px 16px;
  font-size: 16px;
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.5),
            inset -1px -1px 3px rgba(255, 255, 255, 0.09);
}

input:focus{
  outline: none;
  box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.5),
            inset -3px -3px 5px rgba(255, 255, 255, 0.09);
}
</style>
