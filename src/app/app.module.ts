import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutUsComponent } from './ui/about-us/about-us.component';
import { MainComponent } from './ui/main/main.component';
import { ContactComponent } from './ui/contact/contact.component';
import { OfferComponent } from './ui/offer/offer.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { AgmCoreModule } from '@agm/core';


const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    AboutUsComponent,
    MainComponent,
    ContactComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, // <-- debugging purposes only
               scrollPositionRestoration: 'enabled',
               anchorScrolling: 'enabled'
      }),
    SlideshowModule,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDTLwbMuOYLR3cv1G99kGNDNMSiivkgVaE'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
