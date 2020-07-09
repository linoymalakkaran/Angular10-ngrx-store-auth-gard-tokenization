export interface Role {
    _id:string;
    name?: string;
    selected?:boolean
  }

export abstract class RoleData
{
    abstract getRoles(): Promise<Role[]>;
    abstract getRoleId(id:string): Promise<Role>;
}
  
