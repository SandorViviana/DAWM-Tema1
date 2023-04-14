import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityCardComponent } from './city-card/city-card.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DashboardComponent,
    CityCardComponent,
    ServiceCardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
