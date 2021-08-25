import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app"
import "firebase/auth"
import { User } from "./user"
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user?: User = undefined;

  constructor(private fireAuth: AngularFireAuth, private router: Router) {
    this.fireAuth.authState.subscribe(user => {
      this.user = user as any
    })
  }

  getCurrentUser() {
    try {
      return firebase.auth().currentUser
    }
    catch {
      console.log(Error)
      return null
    }
  }


  async loginWithGoogle() {
    await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      res => {
        this.router.navigate(['allblogs'])
 //       console.log("login Successfull")
      }
    ).catch(error => {
      this.router.navigate([''])
      console.log("error while signIn", error)
    })
  }

  signOutWithGoogle() {
    firebase.auth().signOut().then(function () {
//      console.log('Signed Out');
    }, function (error) {
      console.error('Sign Out Error', error);
    });
  }
}

