import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import {
  CollectionReference,
  DocumentData,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  collectionData,
} from '@angular/fire/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private productsCollection!: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.productsCollection = collection(this.firestore, 'products');
  }

  public getProducts() {
    return collectionData(this.productsCollection, {
      idField: 'id',
    }) as Observable<Product[]>;
  }

  public createProduct(product: Product) {
    return addDoc(this.productsCollection, product);
  }

  public generateProductId(): number {
    let id = Math.floor(Math.random() * 1000000000);
    return id;
  }

  public updateProduct(id: string, product: Product) {
    console.log('product', id, product)
    const productDocumentReference = doc(
      this.firestore,
      `products/${id}`,
    );
    return updateDoc(productDocumentReference, { ...product });
  }

  public removeProduct(id: string) {
    const productDocumentReference = doc(this.firestore, `products/${id}`);
    return deleteDoc(productDocumentReference);
  }
}
