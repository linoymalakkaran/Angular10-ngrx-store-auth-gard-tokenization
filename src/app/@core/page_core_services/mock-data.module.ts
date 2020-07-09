import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceProviderService } from './serviceprovider.service';
import { DigitalServicesService } from './services.service';
import { RoleService } from './role.service';
import { CategoryService } from './category.service';
import { WorkFlowService } from './workflow.service';
import { RestProvider } from './rest.service';

const SERVICES = [
  RestProvider,
  ServiceProviderService,
  DigitalServicesService,
  RoleService,
  CategoryService,
  WorkFlowService
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders<any> {
    return <ModuleWithProviders<any>>{
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
