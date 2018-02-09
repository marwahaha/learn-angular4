import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { PanelComponent } from './panel/panel.component';
import { AttemptsComponent } from './attempts/attempts.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PanelComponent, AttemptsComponent, ProgressbarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
