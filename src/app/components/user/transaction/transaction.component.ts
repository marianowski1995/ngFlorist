import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { BasketService } from 'src/app/core/services/basket.service';
import { TransactionService } from 'src/app/core/services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  public currentBasket!: Product[];
  public taxRate!: number;
  public shippingCost!: number;
  public total!: number;
  public userData!: User | null;
  public productsTotal!: number;

  constructor(
    private readonly authService: AuthService,
    private readonly basketService: BasketService,
    private readonly transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.currentBasket = this.basketService.getBasket();

    // set userData
    this.authService.getUserData().subscribe((value: User | null) => {
      console.log('[header component]', value);
      this.userData = value;
    });

    // get TaxRate
    this.taxRate = this.transactionService.getTaxRate();

    // get ShippingCost
    this.shippingCost = this.transactionService.getShippingCosts();

    // set productsTotal for transactionService
    this.productsTotal = this.basketService.getTotal();
    this.total = this.transactionService.calculateTotal(this.productsTotal);
  }
}
