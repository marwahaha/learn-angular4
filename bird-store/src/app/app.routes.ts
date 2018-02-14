import { Routes } from "@angular/router";
import { MainComponent as Main } from "./main/main.component";
import { RestaurantsComponent as Restaurants } from "./restaurants/restaurants.component";
import { DiversionComponent as Diversion } from "./diversion/diversion.component";
import { OfferComponent as Offer } from "./offer/offer.component";
import { HowUseComponent as HowUse } from "./offer/how-use/how-use.component";
import { WhereComponent as Where } from "./offer/where/where.component";

export const ROUTES: Routes = [
  { path: "", component: Main },
  { path: "restaurants", component: Restaurants },
  { path: "diversion", component: Diversion },
  { path: "offer", component: Main },
  {
    path: "offer/:id",
    component: Offer,
    children: [
      { path: '', component: HowUse },
      { path: "how-use", component: HowUse },
      { path: "where", component: Where }
    ]
  }
];
