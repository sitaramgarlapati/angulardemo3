import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './security/login.component';
import { AuthGuard } from './security/auth.guard';
//import { SearchComponent } from './search/search.component'
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductEditComponent } from './products/product-edit.component';
import { ProductEditGuard } from './products/product-edit.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsResolverService } from './products/products-resolver.service';

const routes: Routes = [
  {
    path: 'dashboard',    component: DashboardComponent
  },
  {
    path: 'login',    component: LoginComponent
  },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthGuard],
    data: { claimType: 'canAccessProducts' },
    resolve: {resolvedBooks: ProductsResolverService}
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    canActivate: [AuthGuard],
    data: { claimType: 'canAccessProducts' }
  },
  {
    path: 'products/:id/edit',
    canDeactivate: [ProductEditGuard],
    component: ProductEditComponent
  },

  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: '**', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
