import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import { StartPageComponent } from './start-page/start-page.component';
import { ScrollingModule} from "@angular/cdk/scrolling";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ScrollingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
