import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user.interface';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public userData!: User | null;
  public isAdmin!: boolean | null;

  constructor(private readonly authService: AuthService) {}

  public ngOnInit(): void {
    this.authService.getUserData().subscribe((value: User | null) => {
      console.log('[header component]', value);
      this.userData = value;
    });
  }

  public signOut(): void {
    this.authService.signOut();
  }
}
