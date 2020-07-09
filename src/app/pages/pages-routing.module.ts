import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { ServiceFormBuilderComponent  } from './forms/formbuilder.component';
import { ServiceFormComponent } from './forms/form/form.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path:'form',
      component: ServiceFormBuilderComponent
    },
    {
      path:'form-detail/:id',
      component : ServiceFormComponent,
    },
    {
      path:'form-detail',
      component : ServiceFormComponent,
    },
    {
      path: '',
      redirectTo: 'form',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
