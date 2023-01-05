import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  public shippingCosts: number = 12;
  public taxRate: number = 0.08;

  public getShippingCosts(): number {
    return this.shippingCosts;
  }

  public getTaxRate(): number {
    return this.taxRate;
  }

  public calculateTotal(productsTotal: number): number {
    let total = 0;
    const sum: number = productsTotal + this.shippingCosts;
    const tax: number = sum * this.taxRate;
    total = sum + tax;
    return total;
  }
}
