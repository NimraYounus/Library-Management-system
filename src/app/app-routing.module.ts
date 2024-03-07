import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './home/login/login.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';
import { AdminDashboardComponent } from './admin-user/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-user/admin-home/admin-home.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'SignUp', component: SignUpComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [{ path: 'admin-home', component: AdminHomeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
