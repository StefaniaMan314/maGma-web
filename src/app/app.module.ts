import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ShowcasePageComponent } from "./showcase-page/showcase-page.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { GalleryModule } from "ng-gallery";
import { LightboxModule } from "ng-gallery/lightbox";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ShowcasePageComponent,
    GalleryComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    GalleryModule,
    LightboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
