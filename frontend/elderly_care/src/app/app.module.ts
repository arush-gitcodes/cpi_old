// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DailyCheckinComponent } from './components/daily-checkin/daily-checkin.component';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,LoginComponent,AppComponent,AppRoutingModule,
    DailyCheckinComponent,DashboardComponent
  ],
  providers: [
    AuthService,provideHttpClient(withFetch())
   
  ],
  bootstrap: []
})
export class AppModule { }