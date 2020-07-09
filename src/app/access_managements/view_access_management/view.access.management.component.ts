import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { accessManagementsService } from '../access.managements.service';

@Component({
  selector: 'app-accessmanagement',
  templateUrl: './view.access.management.component.html',
  styleUrls: ['./view.access.management.component.css']
})
export class ViewAccessManagementComponent implements OnInit {
  accessmanagement: {id: number, name: string, status: string};

  constructor(private accessmanagementsService: accessManagementsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.accessmanagement = data['accessmanagement'];
        }
      );
    // const id = +this.route.snapshot.params['id'];
    // this.accessmanagement = this.accessmanagementsService.getaccessmanagement(id);
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.accessmanagement = this.accessmanagementsService.getaccessmanagement(+params['id']);
    //     }
    //   );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
