import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent} from './sidebar/sidebar.component';
import { FooterComponent} from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { TableComponent } from './body/table/table.component';
import { LoginpanitiaComponent } from './body/loginpanitia/loginpanitia.component';
import { RegisterpanitiaComponent} from './body/registerpanitia/registerpanitia.component';
import { LurahloginComponent } from './body/lurahlogin/lurahlogin.component';
import { RegisterlurahComponent } from './body/registerlurah/registerlurah.component';
import { NavbarComponent} from './body/navbar/navbar.component';

const routes: Routes = [
 
  {path: 'footer', component: FooterComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'table', component: TableComponent},
  {path: 'loginpanitia', component: LoginpanitiaComponent},
  {path: 'registerpanitia', component: RegisterpanitiaComponent},
  {path: 'lurahlogin', component: LurahloginComponent},
  {path: 'registerlurah', component: RegisterlurahComponent},
  {path:'', redirectTo:'adminlogin',pathMatch:'full'},
  {
    path: 'body',
    loadChildren: () => import('./body/body.module').then(m => m.BodyModule)
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
