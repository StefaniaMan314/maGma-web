import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenCallComponent } from './open-call/open-call.component';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
	{ path: 'open-call', component: OpenCallComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
