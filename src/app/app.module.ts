
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes} from '@angular/router';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { Err404Component } from './err-404/err-404.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

import { AppareilService} from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/authguard.service';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';

const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent},
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: '', canActivate: [AuthGuard], component: AppareilViewComponent },
  { path: 'not-found', component: Err404Component },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    Err404Component,
    EditAppareilComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard, 
    UserService
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
