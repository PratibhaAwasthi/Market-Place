import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import { CartProduct } from '../../models/CartProduct';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  id: number | null = null;
  products: Product[]= [];
  product: Product | null = null;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })
    this.productService.getProduct().subscribe(res =>{
      this.products = res;
      this.product = this.getProductById(this.id)
      console.log(this.product)
    })
  }
  getProductById(id: number | null): Product{
    return this.products.filter(product => product.id === id)[0];
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
