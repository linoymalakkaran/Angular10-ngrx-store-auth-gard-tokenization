import { Component, OnInit } from '@angular/core';
import { accessManagementsService } from './access.managements.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accessmanagements',
  templateUrl: './access.managements.component.html',
  styleUrls: ['./access.managements.component.css']
})
export class AccessManagementsComponent implements OnInit {
  private accessmanagements: {id: number, name: string, status: string}[] = [];

  constructor(private accessmanagementsService: accessManagementsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.accessmanagements = this.accessmanagementsService.getaccessmanagements();
  }

  onReload() {
    // this.router.navigate(['accessmanagements'], {relativeTo: this.route});
  }

}
