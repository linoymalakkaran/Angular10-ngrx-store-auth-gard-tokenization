import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FormApp } from '../../../@core/data/formapp';
import { ServiceFormService } from '../../../@core/page_core_services/formapp.service';
import { ActivatedRoute } from '@angular/router';
import { FormioUtils, FormBuilderComponent } from 'angular-formio';
import { NbWindowService } from '@nebular/theme';
import { options } from './options';

@Component({
  selector: 'atlp-formbuilder',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class ServiceFormComponent {
  form: FormApp;
  components: any[];
  addmode: boolean;
  id: string;
  flaten: any;
  error: any;
  @ViewChild('formbuilder', { static: true }) formBuilder: FormBuilderComponent;
  @ViewChild('previewTemplate', { static: true }) previewTemplate: TemplateRef<any>;
  @ViewChild('fullScreenTemplate', { static: true }) fullScreenTemplate: TemplateRef<any>;

  constructor(private serviceFormService: ServiceFormService,
    private windowService: NbWindowService,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.components = [];
    this.form = {
      name: "", listform: { schema: { type: "form", components: [] } },
      serviceform: { schema: { type: "form", display: "form", components: [] } }
    };

    this.addmode = true;
    this.error = [];
    this.LoadForms(this.id);
  }

  private async LoadForms(id: string) {
    if (this.id != undefined) {
      this.addmode = false;
      this.form = await this.serviceFormService.getFormById(id);
    }
  }

  showPreview() {
    this.windowService.open(this.previewTemplate,
      { title: this.form.name + ' Preview', windowClass: 'window-height' });
  }

  onChangeTab(event) {
    if (event.tabTitle === "List")
      this.components = FormioUtils.flattenComponents(this.form.serviceform.schema.components, false)
  }

  onSubmit(submission: any) {
    console.log(submission);
  }

  onChange(event) {
    var evt = event;
    if (event.type === "addComponent") {

    }
  }


  fullScreenEditor() {
    this.windowService.open(
      this.fullScreenTemplate,
      { title: 'Edit in full screen', windowClass: 'window-height' }
    ).onClose.subscribe((name: any) => {
      this.formBuilder.setDisplay(this.form.serviceform.schema.display);
    });
  }

  setFormDisplay(event) {
    this.formBuilder.setDisplay(event);

  }

  validateServiceData(): any {
    this.error = [];
    if (this.form.name.trim().length == 0)
      this.error.push({ message: "Form name should not be empty" });

  }

  submit() {
    this.validateServiceData();
    if (this.error.length === 0) {
      var a = this.form;
      if (this.addmode)
        this.serviceFormService.addNewForm(this.form);
      else
        this.serviceFormService.updateForm(this.form);
    }
  }



}

