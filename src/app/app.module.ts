import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GlobalNavComponent } from './global-nav/global-nav.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageChampionsComponent } from './page-champions/page-champions.component';
import { StandartButtonComponent } from './standart-button/standart-button.component';
import { GlobalBodyComponent } from './global-body/global-body.component';
import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavComponent,
    PageHomeComponent,
    PageChampionsComponent,
    StandartButtonComponent,
    GlobalBodyComponent,
    GlobalFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
