import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AdminUserModule } from './admin-user/admin-user.module';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    AdminUserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
