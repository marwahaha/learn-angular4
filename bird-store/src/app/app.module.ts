import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { ROUTES } from "./app.routes";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { DiversionComponent } from "./diversion/diversion.component";
import { OfferComponent } from "./offer/offer.component";
import { HowUseComponent } from './offer/how-use/how-use.component';
import { WhereComponent } from './offer/where/where.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RestaurantsComponent,
    DiversionComponent,
    OfferComponent,
    HowUseComponent,
    WhereComponent
  ],
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
