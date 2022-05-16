import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { MaterialsPageComponent } from './content-page/materials-page/materials-page.component';
import { ToolsPageComponent } from './content-page/tools-page/tools-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    ContentPageComponent,
    MaterialsPageComponent,
    ToolsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
