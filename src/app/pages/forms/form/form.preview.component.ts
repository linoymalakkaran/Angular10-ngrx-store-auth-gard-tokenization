import { Component, ViewChild } from '@angular/core';
import { FormApp } from '../../../@core/data/formapp';
import { NbWindowRef } from '@nebular/theme';
import { ServiceFormComponent } from './form.component';


@Component({
    selector: 'atlp-formbuilder',
    templateUrl: './form.preview.component.html',
    styleUrls: ['./form.component.scss']
})

export class ServiceFormPreviewComponent {
    form: FormApp;
    constructor(protected windowRef: NbWindowRef) {
        
    }
}

