import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ShowcasePageComponent } from './showcase-page/showcase-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'showcase', component: ShowcasePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
