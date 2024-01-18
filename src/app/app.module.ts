import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { ProductComponent } from './components/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { ChartComponent } from './components/chart/chart.component';
import { Data1Component } from './components/data1/data1.component';
import { Data2Component } from './components/data2/data2.component';
import { Data3Component } from './components/data3/data3.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ErrorpageComponent,
    ProductComponent,
    RegisterComponent,
    ChartComponent,
    Data1Component,
    Data2Component,
    Data3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
