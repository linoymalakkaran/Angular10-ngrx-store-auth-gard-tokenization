import { NgModule } from '@angular/core';
import { NbCardModule,NbButtonModule, NbInputModule, NbActionsModule, NbSelectModule, NbTabComponent, NbTableModule, NbTabsetModule, NbCheckboxModule,  } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { FormioModule,FormioAppConfig } from 'angular-formio';
import { ServiceFormService } from '../../@core/page_core_services/formapp.service';
import { ServiceFormComponent } from './form/form.component';
import { ServiceFormBuilderComponent } from './formbuilder.component';


@NgModule({
  imports: [
    FormsModule,
    NbTabsetModule,
    NbCardModule,
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
    NbSelectModule,
    ThemeModule,
    FormioModule,
    NbActionsModule,
  ],
  declarations: [
    ServiceFormBuilderComponent,
    ServiceFormComponent,
  ],
  providers: [
    ServiceFormService,
    { provide: FormioAppConfig, useValue: undefined },
  ]
})
export class ServiceFormBuilderModule { }
