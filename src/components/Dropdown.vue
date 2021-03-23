<template>
  <div class="wrapper">
    <!-- <div>{{selected}}</div> -->
    <div class="title" @click="toggleMenu">
      <div class="selected-option">
        {{showOption}}
      </div>
      <svg viewBox="0 0 320 512" width="16">
          <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8
          7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
      </svg>
    </div>
    <div class="sub-menu">
      <ul class="dropdown-menu" v-if="show_menu">
        <li class="menu-item"
            v-for="(item, index) in iterable"
            :key="index"
            @click="updateOption(item)">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    iterable: {
      type: [String],
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const show_menu = ref(false);
    const selected_option = ref('');

    const showOption = computed(() => (selected_option.value === '' ? props.placeholder
      : selected_option.value));

    const optionHandler = computed({
      get() {
        return props.selected;
      },
      set(val: string) {
        emit('updateOption', val);
      },
    });

    function toggleMenu() {
      show_menu.value = !show_menu.value;
    }

    function updateOption(option: string) {
      selected_option.value = option;
      show_menu.value = false;
      emit('update:modelValue', option);
    }

    return {
      show_menu,
      toggleMenu,
      updateOption,
      showOption,
      optionHandler,
    };
  },
});
</script>

<style scoped>
.wrapper {
  border: solid 1px #fff;
  border-radius: 8px;
  padding: 8px 8px;
  margin: 8px 8px;
}

.wrapper .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wrapper > svg {
  width: 16px;
  margin: 8px;
}
.selected-option {
  display: inline;
}
</style>
