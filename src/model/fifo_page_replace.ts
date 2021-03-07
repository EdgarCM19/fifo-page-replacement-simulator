import PhysicalMemory from "./physical_memory";
import VirtualMemory from "./virtual_memory";

export default class FIFO {

    virtual : VirtualMemory;
    physical : PhysicalMemory;

    constructor(){
        this.virtual = new VirtualMemory(8, 8, 'kb');
        this.physical = new PhysicalMemory(4);
    }

    public referenceProcessPage(pid : string, page : number) {
        //if(!this.virtual.hasProcess(pid)) return;
        let fault = true;
        if(this.virtual.isFull()){
            if(!this.physical.hasProcessPage(pid, page)){
                this.physical.releaseFrame();
                this.physical.loadPage(pid, page);
            } else fault = false;
        } else
            if(!this.physical.hasProcessPage(pid, page))
                this.physical.loadPage(pid, page);
            else 
                fault = false;
        console.log(`Referencia a ${pid}/${page} con fallo de pagina: ${fault}`);
        console.log(`#${this.physical}`);
    }

}