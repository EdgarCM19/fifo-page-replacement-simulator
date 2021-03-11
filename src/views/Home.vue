<template>
  <div class="home">
    <div class="algo">
      {{ settings.settings.virtual_size }}
    </div>
    <div class="process-form">
      <label for="pid">PID:</label>
      <select name="pids" id="pids" v-model="newProcessProps.pid">
        <option v-for="(pid, index) in pids" :key="index" :value="pid">
          {{ pid }}
        </option>
      </select>
      <span>{{ newProcessProps.pid }}</span>
      <label for="arriv-time">Tiempo de arrivo:</label>
      <input type="number" v-model.number="newProcessProps.arrival_time">
      <label for="pages">Numero de paginas:</label>
      <input type="number" v-model.number="newProcessProps.pages">
      <input type="radio" id="manual" value="Manual" v-model="refOpt">
      <label for="manual">Manual</label>
      <input type="radio" id="random" value="Random" v-model="refOpt">
      <label for="manual">Random</label>
      <input type="text" id="refs" v-model="refs_input" :class="{error : validateRefsInput}">
      <label v-if="refOpt === 'Random'" >Ingrese el numero total de referencias a realiar</label>
      <label v-else-if="refOpt === 'Manual'" for="refs">
        Ingrese las referencias separadas por ','
      </label>
      <label v-else for="refs">Seleccione entre modo manual y random</label>
      <button @click="addProcess">Agregar</button>
    </div>
    <div class="config-form">
      <label for="virtual-size">Tamaño de la memoria virtual</label>
      <input type="text" id="virtual-size">
      <label for="virtual-size">Tamaño de la memoria fisica</label>
      <input type="text" id="physical-size">
    </div>
    <div class="process-list">
      <div class="process-item"
        v-for="(item, index) in inputProcesses"
        :key="index"
      >
        {{ `Proceso: ${item.pid} con ${item.pages} tiempo de arribo: ${item.arrival_time}
        y referencias: ${item.references}`}}
      </div>
    </div>
    <router-link to="/main">
      <button>
        Main
      </button>
    </router-link>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */
import { IProcessInput } from '@/model/loader';
import {
  defineComponent, ref, reactive, computed, inject,
} from 'vue';

export default defineComponent({
  setup() {
    const settings = inject('settings');

    const refOpt = ref('');
    const pids = ref(['A', 'B', 'C', 'D']);
    const refs_input = ref('');
    const inputProcesses = ref<IProcessInput []>([]);

    const newProcessProps = reactive({
      pid: '',
      arrival_time: 0,
      pages: 0,
      references: [] as Array<number>,
      total_time: 0,
    });

    const validateRefsInput = computed(
      (): boolean => (refs_input.value.replaceAll('/s+/g', '').match('([0-9]+)(,[0-9]+)*') === null),
    );

    function addProcess() {
      console.log(`${newProcessProps.pid}-${newProcessProps.arrival_time}`);
      pids.value = pids.value.filter((e) => e !== newProcessProps.pid);
      if (refOpt.value === 'Manual') {
        let cad: string[] = refs_input.value.replaceAll(' ', '').split(',');
        cad = cad.map((x) => x.trim());
        newProcessProps.references = cad.map((x) => parseInt(x, 10));
        inputProcesses.value.push({
          pid: newProcessProps.pid,
          arrival_time: newProcessProps.arrival_time,
          pages: newProcessProps.pages,
          total_time: refs_input.value.length,
          references: newProcessProps.references,
        });
        console.log('#', inputProcesses.value);
      } else {
        console.log('Holis');
      }
    }
    return {
      refOpt,
      pids,
      refs_input,
      addProcess,
      newProcessProps,
      inputProcesses,
      validateRefsInput,
      settings,
    };
  },
});

</script>

<style>
laber, input, select {
  display: block;
}
.home,
.process-form,
.config-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.process-form,
.config-form{
  padding: 8px 16px;;
  border: solid 1px black;
}

.error {
  background-color: red;
}
</style>
