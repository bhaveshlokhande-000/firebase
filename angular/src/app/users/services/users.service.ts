import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private service: AuthService) {
  }

  signUp(data: any) {
    let url = "http://localhost:3000/signup"
    return this.http.post(url, data)
  }

  signIn(data: any) {
    let url = "http://localhost:3000/signin"
    return this.http.post(url, data)

  }

  signOut() {
    let guid = this.service.getCurrentUser()?.uid || 0
    let url = "http://localhost:3000/signout?guid=" + guid
    return this.http.get(url)
  }

  loginWithGoogle() {
    this.service.loginWithGoogle()
  }

  googleSignOut() {
    this.service.signOutWithGoogle()
  }

}



