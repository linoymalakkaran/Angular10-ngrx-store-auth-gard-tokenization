import { RoleData, Role } from '../data/role';
import { RestProvider } from './rest.service';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class RoleService extends RoleData {
    roles:Role[];
    constructor(
        @Inject(RestProvider)  private restProvider: RestProvider)
    {
        super();
    }

    async getRoles(): Promise<Role[]> {
        if (this.roles == undefined)
        {
            this.roles = await this.restProvider.get("atlproles");
        }    
        return this.roles;
    }
    async getRoleId(id: string): Promise<Role> {
       if (this.roles == undefined)
            await this.getRoles();
        return this.roles.find(x=>x._id === id);
    }

}