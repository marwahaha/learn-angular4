import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import CartService from './cart.service';
import { DiversionComponent } from './diversion/diversion.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HowUseComponent } from './offer/how-use/how-use.component';
import { OfferComponent } from './offer/offer.component';
import { WhereComponent } from './offer/where/where.component';
import { OrderPurchaseSuccessComponent } from './order-purchase-success/order-purchase-success.component';
import { OrderPurchaseComponent } from './order-purchase/order-purchase.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AbbreviateDescription } from './utils/abbreviate-description.pipe';

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
    WhereComponent,
    AbbreviateDescription,
    OrderPurchaseComponent,
    OrderPurchaseSuccessComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
