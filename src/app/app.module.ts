import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {MaterialModule} from './core/material/material.module';
import { SearchComponent } from './search/search.component'
import {LoginComponent} from './security/login.component';
import {SecurityService} from './security/security.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductEditComponent } from './products/product-edit.component';
import { ProductEditGuard } from './products/product-edit.guard';
import { AuthGuard } from './security/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductData),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [SecurityService, AuthGuard, ProductEditGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
