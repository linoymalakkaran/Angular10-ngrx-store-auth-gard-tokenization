import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { accessManagementsService } from '../access.managements.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-accessmanagement',
  templateUrl: './edit.access.management.component.html',
  styleUrls: ['./edit.access.management.component.css']
})
export class EditAccessManagementComponent implements OnInit, CanComponentDeactivate {
  accessmanagement: {id: number, name: string, status: string};
  accessmanagementName = '';
  accessmanagementStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private accessmanagementsService: accessManagementsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        }
      );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.accessmanagement = this.accessmanagementsService.getaccessmanagement(id);
    // Subscribe route params to update the id if params change
    this.accessmanagementName = this.accessmanagement.name;
    this.accessmanagementStatus = this.accessmanagement.status;
  }

  onUpdateaccessmanagement() {
    this.accessmanagementsService.updateaccessmanagement(this.accessmanagement.id, {name: this.accessmanagementName, status: this.accessmanagementStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.accessmanagementName !== this.accessmanagement.name || this.accessmanagementStatus !== this.accessmanagement.status) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}
