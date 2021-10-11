import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { CheckoutSuccessComponent } from './components/checkout-success/checkout-success.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    ProductItemDetailComponent,
    NavbarComponent,
    CartComponent,
    CreateFormComponent,
    CheckoutSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
