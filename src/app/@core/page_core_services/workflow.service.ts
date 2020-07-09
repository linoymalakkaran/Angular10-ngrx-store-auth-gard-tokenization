import { WorkFlowData, WorkFlow } from '../data/workflow';
import { RestProvider } from './rest.service';
import { Injectable } from '@angular/core';

@Injectable()
export class WorkFlowService extends WorkFlowData {
    workflow:WorkFlow[];
    constructor(private restProvider: RestProvider)
    {
        super();
    }

    addWorkflow(data: WorkFlow)  {
        this.restProvider.post("atlpworkflow",data).then(()=>{
           this.workflow.push(data);
        });
    }

    updateWorkflow(data: WorkFlow) {
        this.restProvider.put("atlpworkflow/" + data._id,data).then(()=>{
            var foundIndex = this.workflow.findIndex(x => x._id == data._id);
            this.workflow[foundIndex] = data;
        });
        
    }

    async getWorkflows(): Promise<WorkFlow[]> {
        
        if (this.workflow == undefined)
        {
            var result:WorkFlow[] = await this.restProvider.get("atlpworkflow");
             this.workflow = result;
        }    
        return this.workflow;
    }
    async getWorkflowBy(id: string): Promise<WorkFlow> {
       if (this.workflow == undefined)
            await this.getWorkflows();

        return this.workflow.find(x=>x._id === id);
    }

}