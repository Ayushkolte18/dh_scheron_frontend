import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { IndustriesComponent } from './industries/industries.component';
import { NetworkComponent } from './network/network.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'industries', component: IndustriesComponent},
  {path: 'network', component: NetworkComponent},
  {path: 'career', component: CareerComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
