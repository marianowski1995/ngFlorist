import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  CollectionReference,
  doc,
  DocumentData,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import firebase from 'firebase/compat/app';
import {
  UserSignUpForm,
  UserSignUpRequest,
} from '../interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public usersCollection!: CollectionReference<DocumentData>;
  private _userData: BehaviorSubject<firebase.auth.UserCredential | null> =
    new BehaviorSubject<firebase.auth.UserCredential | null>(null);

  constructor(
    public auth: AngularFireAuth,
    private readonly firestore: Firestore
  ) {
    this.usersCollection = collection(this.firestore, 'users');
  }

  public getUserData(): BehaviorSubject<firebase.auth.UserCredential | null> {
    return this._userData;
  }

  public signIn(email: string, password: string) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential: firebase.auth.UserCredential) => {
        console.log('success', userCredential);
        this._userData.next(userCredential);
      })
      .catch(err => {
        console.log(err);
      });
  }

  public signUp(userData: UserSignUpForm) {
    const userRequest: UserSignUpRequest = {
      email: userData.email,
      name: userData.name,
      isAdmin: false,
    };

    this.auth
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((userCredential: firebase.auth.UserCredential) => {
        console.log('success', userCredential);
        setDoc(
          doc(this.firestore, 'user', userCredential.user?.uid || ''),
          userRequest
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  public signOut() {
    this.auth.signOut().then(() => {
      this._userData.next(null);
    });
  }
}
