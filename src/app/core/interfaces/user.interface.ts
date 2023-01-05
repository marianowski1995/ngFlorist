export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
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
}
