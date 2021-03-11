import CPU from '@/model/cpu';
import { reactive } from 'vue';

const settings = reactive({
  virtual_size: 12,
  physical_size: 0,
  cpu: new CPU(),
});

const methods = {
  nextStep() {
    console.log('Holas a todos uwu');
    settings.cpu.next();
  },
};

const getters = {
  completed() {
    return `${settings.cpu.completed_processes} / ${settings.cpu.total_processes}`;
  },
  processes_queue() {
    return settings.cpu.scheduler.job_queue.queue;
  },
};

export default {
  settings,
  methods,
  getters,
};
