import { Routes } from '@angular/router';

import { Login } from './login/login';
import { CreateUser } from './create-user/create-user';
import { MainMenu } from './main-menu/main-menu';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'create-user', component: CreateUser },
  { path: 'main-menu', component: MainMenu },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
