import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  OnDestroy,
  OnInit
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AlertComponent } from '../../shared/alert/alert.component';
import { PlaceholderDirective } from '../../shared/placeholder/placeholder.directive';
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../store/auth.actions';
import { User } from '../auth_models/user.model';
import { Role } from '../auth_models/role_model';

@Component({
  selector: 'nb-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
})
export class NbRegisterComponent {

  showMessages: any = {};
  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: User = new User("", "", "", null, "", "","",new Role("", null));

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private store: Store<fromApp.AppState>) {
  }

  register(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    this.store.dispatch(
      new AuthActions.SignupStart({ email: this.user.email, password: this.user.password })
    );
  }

}
