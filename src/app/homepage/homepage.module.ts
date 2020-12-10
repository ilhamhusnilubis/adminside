import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BoostrapModule } from '../boostrap/boostrap.module';
import { AppRoutingModule } from '../app-routing.module';
import { TableComponent } from '../body/table/table.component';
import { HeaderComponent } from '../header/sidebar.component';
import { BodyComponent } from '../body/body.component';
import { FooterComponent } from '../footer/footer.component';
import { AdminloginComponent } from '../adminlogin/adminlogin.component';
import { HomepageComponent } from '../homepage/homepage.component';



@NgModule({
  declarations: [
    TableComponent,
    HeaderComponent,
    
    BodyComponent,
    FooterComponent,
    AdminloginComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    BoostrapModule,
    AppRoutingModule,
    
  ]
})
export class HomepageModule { }
