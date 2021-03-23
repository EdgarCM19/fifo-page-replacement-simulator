import CPU from '@/model/cpu';
import { reactive } from 'vue';

const settings = reactive({
  virtual_size: 12,
  physical_size: 0,
  cpu: new CPU(),
});

const methods = {
  nextStep() {
    settings.cpu.next();
  },
};

const getters = {
  current() {
    if (settings.cpu.computed_process !== null) return `${settings.cpu.computed_process.PID}-${settings.cpu.current_reference}`;
    return '';
  },
  completed() {
    return `${settings.cpu.completed_processes} / ${settings.cpu.total_processes}`;
  },
  processes_queue() {
    return settings.cpu.scheduler.job_queue.queue;
  },
  virtualMemory() {
    return settings.cpu.virtual.pages.map((x) => (!x.free ? `${x.page.process_pid}-${x.page.process_page}` : '#'));
  },
  physicalMemory() {
    return settings.cpu.fifo.physical.frames.map((x) => (!x.free ? `${x.frame.process_pid}-${x.frame.process_page}` : '#'));
  },
};

export default {
  settings,
  methods,
  getters,
};
