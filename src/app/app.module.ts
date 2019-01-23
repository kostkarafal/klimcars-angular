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

const appRoutes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'main', component: MainComponent },
  { path: 'offer', component: OfferComponent},
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/main', pathMatch: 'full' }
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
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
