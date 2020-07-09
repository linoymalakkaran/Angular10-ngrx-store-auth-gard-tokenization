import { NgModule } from '@angular/core';
import { NbMenuModule, NbWindowModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

import { ServiceFormBuilderModule } from './forms/formbuilder.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbWindowModule.forChild(),
    ServiceFormBuilderModule,
  ],
  declarations: [
    PagesComponent
  ],
})
export class PagesModule {
}
