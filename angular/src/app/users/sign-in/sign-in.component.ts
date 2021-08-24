import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private serivce: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data: any) {
    this.serivce.signIn(data).subscribe((result) => {
      this.router.navigate(['allblogs'])
    }, (error) => {
      console.log(error)
      this.router.navigate([''])
    })
  }

  loginWithGoogle(event: any) {
    event.preventDefault()
    this.serivce.loginWithGoogle()
  }

}
