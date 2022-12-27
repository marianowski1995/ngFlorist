import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="container">
      <header
        class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
      >
        <a
          routerLink="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32"></svg>
          <i class="bi bi-flower1 display-6 me-4"></i>

          <span class="fs-4">NgFlorist</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <a routerLink="/" class="nav-link">
              <i class="bi bi-flower3 mx-2"></i>
              Home
            </a>
          </li>

          <li class="nav-item">
            <a routerLink="/client/about" class="nav-link">
              <i class="bi bi-flower3 mx-2"></i>
              About
            </a>
          </li>
          <li class="nav-item">
            <a routerLink="/user/basket" class="nav-link">
              <i class="bi bi-cart mx-2"></i>
              Basket
            </a>
          </li>
          <li class="nav-item">
            <a routerLink="/user" class="nav-link">
              <i class="bi bi-person-circle mx-2"></i>
              Account
            </a>
          </li>
          <li class="nav-item">
            <a routerLink="/admin" class="nav-link">
              <i class="bi bi-person-gear"></i>
              [Admin]
            </a>
          </li>

          <li class="nav-item">
            <a routerLink="/auth/sign-in" class="btn btn-success">
              <i class="bi bi-person-circle mx-1"></i>
              Sign in
            </a>
          </li>
        </ul>
      </header>
    </div>
  `,
})
export class HeaderComponent {}
