import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { User } from '../shared/user.model';
@Injectable()
export class AuthService {
  private userAccount: AngularFirestoreCollection<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.userAccount = afs.collection<User>('users');
  }

  signIn() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider);
  }

  signOut() {
    this.afAuth.signOut();
  }

  storeUser(user: User) {
    const res = this.afs
      .collection('users')
      .doc(user.uid)
      .set(Object.assign({}, user));
  }
}
