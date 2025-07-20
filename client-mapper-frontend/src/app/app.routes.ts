import { Routes } from '@angular/router';

import { Login } from './login/login';
import { CreateUser } from './create-user/create-user';
import { MainMenu } from './main-menu/main-menu';
import { AdminMenu } from './admin-menu/admin-menu';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'create-user', component: CreateUser },
  { path: 'main-menu', component: MainMenu },
  { path: 'admin-menu', component: AdminMenu },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
