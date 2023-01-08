import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { doc, FieldValue, getDoc, updateDoc } from '@firebase/firestore';
import { Order } from '../interfaces/order.interface';
import { User } from '../interfaces/user.interface';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  public shippingCosts: number = 12;
  public taxRate: number = 0.08;

  constructor(
    private readonly router: Router,
    private readonly firestore: Firestore,
    private readonly authService: AuthService
  ) {}

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

  // gets id to update that user data
  private getUserIdFromAuthService(): string | null {
    let user!: User | null;

    this.authService.getUserData().subscribe((value: User | null) => {
      user = value;

      console.log(user);
    });

    if (user) {
      console.log(user.id);
      return user.id;
    } else {
      return null;
    }
  }

  // function to proceed order assigns randomly if order was successfull or not
  public proceedOrder(order: Order) {
    const random = Math.floor(Math.random() * 10);
    const userId: string | null = this.getUserIdFromAuthService();
    let user!: User;

    if (random <= 8) {
      const reference = doc(this.firestore, `user/${userId}`);
      getDoc(reference).then((doc: any) => {
        const data: User = doc.data();
        user = data;
        user.orders.push(order);
        updateDoc(reference, { ...user });
      });
      this.router.navigate(['/user/transaction-success']);
    } else {
      this.router.navigate(['/user/transaction-failure']);
    }
  }
}
