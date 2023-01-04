import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Product } from "../../../core/interfaces/product.interface";
import { BasketService } from "../../../core/services/basket.service";
import { AuthService } from "../../../core/services/auth.service";

@Component({
  selector: "app-basket",
  templateUrl: `basket.component.html`,
  styleUrls: ["./basket.component.css"],
})
export class BasketComponent implements OnInit {
  public basket: any[] = [];
  public total!: number;

  constructor(private readonly basketService: BasketService) {}

  ngOnInit(): void {
    this.getBasket();
    this.getTotal();
  }

  public getBasket() {
    this.basket = this.basketService.getBasket();
  }

  public getTotal() {
    this.total = this.basketService.getTotal();
  }

  public removeFromBasket(item: Product) {
    this.basketService.removeFromBasket(item);
    this.getBasket();
  }

  public clearBasket() {
    this.basketService.clearBasket();
    this.getBasket();
  }
}
