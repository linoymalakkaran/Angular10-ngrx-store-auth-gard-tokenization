import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable, Pipe } from '@angular/core';

import { accessManagementsService } from '../access.managements.service';

interface accessManagement {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class AccessManagementResolver implements Resolve<accessManagement> {
  constructor(private accessmanagementsService: accessManagementsService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<accessManagement> | Promise<accessManagement> | accessManagement {
    return this.accessmanagementsService.getaccessmanagement(+route.params['id']);
  }
}
