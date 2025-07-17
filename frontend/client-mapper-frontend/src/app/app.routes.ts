import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'main-menu', component: MainMenuComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
