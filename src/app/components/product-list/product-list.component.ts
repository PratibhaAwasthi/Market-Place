import { Component, OnInit } from '@angular/core';
import { Product, productCount } from '../../models/Product';
import { CartProduct } from '../../models/CartProduct';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productCount: string[] = productCount;

  constructor(private productService: ProductService ) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(res =>{
      this.products = res;
    })

  }
  onSubmit(cartProduct: Product, event: any): boolean{
    let newCartProduct: CartProduct[] = [];
    let message: string = '';
    let isCartOptionExist: boolean = false;

    const selectedOption = event.target[0].options[event.target[0].options.selectedIndex].value;
    const cartProducts: CartProduct[] | [] = this.productService.getCartProduct();

    const cartIdx = cartProducts.findIndex(cart => cart.id === cartProduct.id)
    newCartProduct = cartProducts;

    if((cartIdx === -1) || (cartProducts.length === 0)){
      newCartProduct.push(Object.assign(cartProduct, {option: selectedOption}))
      message = `New Item '${cartProduct.name}' added to cart`;
    } else{
      const option: string = newCartProduct[cartIdx].option;
      isCartOptionExist = selectedOption === option

      if (isCartOptionExist){
        message = `${option} Item(s) of '${cartProduct.name}' already exist in cart.`;
      }else{
        newCartProduct[cartIdx].id = cartProduct.id;
        newCartProduct[cartIdx].option = selectedOption;
        message = `${option} Item(s) of '${cartProduct.name}' already exist in cart. Will be updated to ${selectedOption}`;
      }
      
    }
    !isCartOptionExist? this.productService.addToCart(newCartProduct): null;

    alert(message);

    this.printLocalData(); // for debugging
    return false;
  }
  printLocalData(): void{
    console.log(this.productService.getCartProduct())
  }


}
