import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  CollectionReference,
  DocumentData,
  Firestore,
} from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import firebase from 'firebase/compat/app';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public usersCollection!: CollectionReference<DocumentData>;

  constructor(
    public auth: AngularFireAuth,
    private readonly firestore: Firestore
  ) {
    this.usersCollection = collection(this.firestore, 'users');
  }

  public login(email: string, password: string) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('success');
      })
      .catch(err => {
        console.log(err);
      });
  }

  public logout() {
    this.auth.signOut();
  }
}
