import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { MaterialsPageComponent } from './content-page/materials-page/materials-page.component';
import { ToolsPageComponent } from './content-page/tools-page/tools-page.component';
import { LayoutPageComponent } from './content-page/layout-page/layout-page.component';
import { ApplicationPageComponent } from './content-page/application-page/application-page.component';
import { OrderPageComponent } from './content-page/order-page/order-page.component';
import { DeliveryPageComponent } from './content-page/delivery-page/delivery-page.component';
import { FooterPageComponent } from './content-page/footer-page/footer-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o'
@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    ContentPageComponent,
    MaterialsPageComponent,
    ToolsPageComponent,
    LayoutPageComponent,
    ApplicationPageComponent,
    OrderPageComponent,
    DeliveryPageComponent,
    FooterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
