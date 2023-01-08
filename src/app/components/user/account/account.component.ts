import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/interfaces/order.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  public userData!: User | null;
  public orders!: Order[] | undefined;

  constructor(private readonly authService: AuthService) {}

  public ngOnInit(): void {
    this.authService.getUserData().subscribe((value: User | null) => {
      console.log('[header component]', value);
      this.userData = value;
      this.orders = value?.orders;
      console.log(this.orders);
    });
  }
}
