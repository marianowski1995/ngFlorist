import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class BasketService {
  public basket: Product[] = [];

  public getBasket() {
    let storage: any = localStorage.getItem('basket');
    let currentBasket = JSON.parse(storage);
    console.log(currentBasket);
    return currentBasket;
  }

  public addToBasket(product: Product) {
    this.basket.push(product);
    this.updateBasket();
  }

  public removeFromBasket(product: Product) {
    console.log(product);
  }

  public clearBasket() {
    this.basket = [];
  }

  public updateBasket() {
    localStorage.setItem('basket', JSON.stringify(this.basket));
    console.log(this.basket);
  }

  public getTotal() {
    let storage: any = localStorage.getItem('basket');
    let currentBasket = JSON.parse(storage);

    let result = currentBasket.reduce(
      (acc: any, obj: any) => acc + obj.price,
      0
    );
    console.log(result);
    return result;
  }
}
