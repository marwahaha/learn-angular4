import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, MainComponent],
  imports: [BrowserModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}