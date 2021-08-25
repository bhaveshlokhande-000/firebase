import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  signout(event: any) {
    event.preventDefault()
    this.service.signOut().subscribe((result: any) => {
      if (result.googleSignOut) this.service.googleSignOut()
    }, error => {
      console.log(error)
      this.router.navigate([''])
    })
  }
}
