import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutSuccessComponent } from './components/checkout-success/checkout-success.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'item-detail/:id', component: ProductItemDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'success/:firstName/:totalPrice', component: CheckoutSuccessComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
