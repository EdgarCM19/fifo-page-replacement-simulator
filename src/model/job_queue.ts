import Process from "./process";
import { readFileSync } from 'fs';

export default class JobQueue {

    queue : Process[];
    index : number;

    constructor(){ 
        this.queue = [];
        this.index = 0; 
    }

    public registerProcess(process: Process) : void {
        this.queue.push(process)
    }

    public deleteProcess(pid : string) : void {
        this.queue = this.queue.filter(p => p.PID !== pid);
        return;
    }

    public choseProcess() : Process | null {
        if(this.queue.length === 0) return null;
        return this.queue[this.index++ % this.queue.length];
    }

    public static loadFromFile(file_path : string): JobQueue {
        let content = JSON.parse(readFileSync(file_path, 'utf8'));
        let temp_queue = new JobQueue();
        content['processes'].forEach(element => {
            temp_queue.registerProcess(
                new Process(element['pid'], element['references'], element['virtual_address']));
        });
        return temp_queue;
    }

    public toString() : string {
        return this.queue.join('-----------------\n');
    }
}