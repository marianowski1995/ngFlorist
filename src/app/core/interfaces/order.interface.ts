import { Product } from './product.interface';

export interface Order {
  id: number;
  products: Product[];
  quantity: number;
  total: number;
}
