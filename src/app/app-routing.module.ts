import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'user', component: UserComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
