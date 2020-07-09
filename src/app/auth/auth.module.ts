import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ExtraOptions, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { NbAuthComponent } from './auth.component';
import { NbAuthBlockComponent } from './auth-block/auth-block.component';
import { NbRegisterComponent } from './register/register.component';

import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
} from '@nebular/theme';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    component: NbAuthComponent,
  },
  {
    path: 'login',
    //component: NbAuthComponent,
    component: LoginComponent,
  },
  {
    path: 'register',
    component: NbRegisterComponent,
  },
];


@NgModule({
  declarations: [
    LoginComponent,
    NbAuthComponent,
    NbAuthBlockComponent,
    NbRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    NbAlertModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule,
    NbIconModule,
  ]
})
export class AuthModule { }


