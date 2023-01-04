import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../core/services/auth.service";
import firebase from "firebase/compat/app";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  public userData!: firebase.auth.UserCredential | null;
  public isAdmin!: boolean | null;

  constructor(private readonly authService: AuthService) {}

  public ngOnInit(): void {
    this.authService
      .getUserData()
      .subscribe((userData: firebase.auth.UserCredential | null) => {
        this.userData = userData;
      });
  }

  public signOut(): void {
    this.authService.signOut();
  }
}
