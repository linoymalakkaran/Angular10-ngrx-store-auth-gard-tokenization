import { Component } from '@angular/core';
import { FormApp } from '../../@core/data/formapp';
import { ServiceFormService } from '../../@core/page_core_services/formapp.service';
import { Router } from '@angular/router';

@Component({
    selector: 'atlp-formbuilder',
    templateUrl: './formbuilder.component.html',
    styleUrls: ['./formbuilder.component.scss']
})
export class ServiceFormBuilderComponent {
    public forms: FormApp[];
    public searchTerm: string;
    constructor(private serviceFormService: ServiceFormService,
        private route: Router) {
        this.LoadForms();
    }


    private addnewform() {
        this.route.navigate(['/atlp/form-detail']);
    }

    private async filter() {
        if (this.searchTerm.length > 0) {
            await this.LoadForms();
            this.forms = this.forms.filter(x => x.name.includes(this.searchTerm)
                || x.description.includes(this.searchTerm));
        }
        else{
            this.LoadForms();
        }
    }

    private async openDetails(id: string) {
        this.route.navigate(['/atlp/form-detail', id]);
    }


    private async LoadForms() {
        var fields: any = { _id: 1, name: 1, description: 1 };
        this.forms = await this.serviceFormService.getForms(fields);
    }

}

