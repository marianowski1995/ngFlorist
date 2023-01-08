import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  CollectionReference,
  doc,
  DocumentData,
  Firestore,
  getDoc,
  setDoc,
} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import firebase from 'firebase/compat/app';
import {
  User,
  UserSignUpForm,
  UserSignUpRequest,
} from '../interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public usersCollection!: CollectionReference<DocumentData>;
  private _userData: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);

  constructor(
    public auth: AngularFireAuth,
    private readonly firestore: Firestore,
    private readonly router: Router
  ) {
    this.usersCollection = collection(this.firestore, 'users');
  }

  public signUp(userData: UserSignUpForm) {
    const userRequest: UserSignUpRequest = {
      email: userData.email,
      name: userData.name,
      isAdmin: false,
      orders: [],
    };

    this.auth
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((userCredential: firebase.auth.UserCredential) => {
        if (!userCredential.user?.uid) {
          return;
        }

        const userId: string = userCredential.user.uid;
        const newUser: User = {
          id: userId,
          ...userRequest,
        };

        setDoc(doc(this.firestore, 'user', userId || ''), userRequest);
        localStorage.setItem('user', JSON.stringify(newUser));
        this._userData.next(newUser);
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public signIn(email: string, password: string) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential: firebase.auth.UserCredential) => {
        this.getUserDetailsFromDatabase(userCredential.user?.uid);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public signOut() {
    this.auth.signOut().then(() => {
      this._userData.next(null);
      localStorage.removeItem('user');
    });
  }

  public checkUserState() {
    let user: any = localStorage.getItem('user');
    user = JSON.parse(user);

    if (user) {
      this._userData.next(user);
    }

    if (user === null) {
      console.log('[auth service]: user is null.');
    }
  }

  public getUserDetailsFromDatabase(documentId: any | string) {
    const documentReference: any = doc(this.firestore, `user/${documentId}`);

    getDoc(documentReference)
      .then((doc: any) => {
        const data: User = doc.data();
        localStorage.setItem('user', JSON.stringify(data));
        this._userData.next(data);

        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public getUserData(): BehaviorSubject<User | null> {
    return this._userData;
  }
}
