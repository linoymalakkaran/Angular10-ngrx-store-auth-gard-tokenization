import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { SharedModule } from './shared/shared.module';
import { AuthCoreModule } from './auth.core.module';
import * as fromApp from './store/app.reducer';
import { AuthEffects } from './auth/store/auth.effects';
import { environment } from '../environments/environment';

import {
  NbDatepickerModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbDialogModule,
} from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';

/**
 * Access management
 */

import { AuthGuard } from './auth/auth.guard';
import { CanDeactivateGuard } from './access_managements/edit_access_management/can-deactivate-guard.service';

import { ErrorPageComponent } from './error_page/error.page.component';
import { PageNotFoundComponent } from './page_not_found/page.not.found.component';
import { EditAccessManagementComponent } from './access_managements/edit_access_management/edit.access.management.component';
import { ViewAccessManagementComponent } from './access_managements/view_access_management/view.access.management.component'
import { AccessManagementsComponent } from './access_managements/access.managements.component'
import { AccessManagementResolver } from './access_managements/view_access_management/access.management-resolver.service';
import { accessManagementsService } from './access_managements/access.managements.service'

/**
 * Import the Custom component.
 */
import FormioHappinessSurvey from '../app/custom_components/happiness_survey_component/index';
Formio.use(FormioHappinessSurvey);

import FormioStarRating from '../app/custom_components/star_rating/index';
Formio.use(FormioStarRating);

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    PageNotFoundComponent,
    EditAccessManagementComponent,
    ViewAccessManagementComponent,
    AccessManagementsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    CoreModule.forRoot(),
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    SharedModule,
    AuthCoreModule
  ],
  providers: [
    accessManagementsService,
    AuthGuard,
    CanDeactivateGuard,
    AccessManagementResolver
  ],
  bootstrap: [AppComponent]

})
export class AppModule {

}
