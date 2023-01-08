import { Order } from './order.interface';

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  orders: Order[];
}

export interface UserSignUpForm {
  email: string;
  name: string;
  password: string;
}

export interface UserSignUpRequest {
  email: string;
  name: string;
  isAdmin: boolean;
  orders: Order[];
}
