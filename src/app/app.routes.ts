import { Routes } from '@angular/router';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { BookingFormComponent } from './page/booking-form/booking-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, } from '@angular/router';




export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'buchen', component: BookingFormComponent },
];
