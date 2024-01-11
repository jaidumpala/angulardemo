import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'about-us',component:AboutComponent},
    //{path:'**',component:ErrorpageComponent},
    {path:'product/:id/:name',component:ProductComponent},
    {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
