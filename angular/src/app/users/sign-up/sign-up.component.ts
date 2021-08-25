import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private serivce: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data: any) {
    this.serivce.signUp(data).subscribe((result) => {
      this.router.navigate(['allblogs'])
    }, error => {
      console.log(error)
    })
  }

  loginWithGoogle(event: any) {
    event.preventDefault()
    this.serivce.loginWithGoogle()
  }

}
