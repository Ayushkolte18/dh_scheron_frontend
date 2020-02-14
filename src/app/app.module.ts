import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { NetworkComponent } from './network/network.component';
import { ProductComponent } from './product/product.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndustriesComponent,
    NetworkComponent,
    ProductComponent,
    CareerComponent,
    ContactComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
