export interface WorkFlow {
    _id:string;
    name?: string;
    description?:string;
    bpmn?: string;
  }

export abstract class WorkFlowData
{
    abstract getWorkflows(): Promise<WorkFlow[]>;
    abstract getWorkflowBy(id:string): Promise<WorkFlow>;
    abstract addWorkflow(data:WorkFlow);
    abstract updateWorkflow(data:WorkFlow);
    
}
  
