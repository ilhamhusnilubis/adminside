import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BoostrapModule } from './boostrap/boostrap.module';
import { BodyModule } from './body/body.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './body/table/table.component';
import { LoginpanitiaComponent } from './body/loginpanitia/loginpanitia.component';
import { RegisterpanitiaComponent } from './body/registerpanitia/registerpanitia.component';
import { RegisterlurahComponent } from './body/registerlurah/registerlurah.component';
import { LurahloginComponent } from './body/lurahlogin/lurahlogin.component';
import { NavbarComponent } from './body/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BodyComponent,
    FooterComponent,
    AdminloginComponent,
    HomepageComponent,
    TableComponent,
    LoginpanitiaComponent,
    RegisterpanitiaComponent,
    LurahloginComponent,
    NavbarComponent,
    RegisterlurahComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule .forRoot(),
    BrowserModule,
    BoostrapModule,
    AppRoutingModule,
    BodyModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
