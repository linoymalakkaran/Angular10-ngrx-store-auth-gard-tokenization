import { ExtraOptions, RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './auth/auth.guard';
import { CanDeactivateGuard } from './access_managements/edit_access_management/can-deactivate-guard.service';

import { ErrorPageComponent } from './error_page/error.page.component';
import { PageNotFoundComponent } from './page_not_found/page.not.found.component';
import { EditAccessManagementComponent } from './access_managements/edit_access_management/edit.access.management.component';
import { ViewAccessManagementComponent } from './access_managements/view_access_management/view.access.management.component'
import { AccessManagementsComponent } from './access_managements/access.managements.component'
import { AccessManagementResolver } from './access_managements/view_access_management/access.management-resolver.service';
import { NbAuthComponent } from '../app/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    canActivateChild: [AuthGuard],
    path: 'atlp',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule),
  },
  // {
  //   path: '',
  //   loadChildren: './auth/auth.module#AuthModule'
  // },
  {
    // canActivate: [AuthGuard],
    path: 'accessmanagement',
    canActivateChild: [AuthGuard],
    component: AccessManagementsComponent,
    children: [
      {
        path: ':id',
        component: ViewAccessManagementComponent,
        resolve:
        {
          server: AccessManagementResolver
        }
      },
      {
        path: ':id/edit',
        component: EditAccessManagementComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  },
  { path: 'not-found', component: PageNotFoundComponent },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: {
      message: 'Page not found!'
    }
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

const config: ExtraOptions = {
  useHash: false,
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
