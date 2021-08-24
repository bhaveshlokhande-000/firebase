import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent implements OnInit {

  user: any = {}
  constructor(private service: BlogService, private router: Router) {
    this.loadBlogs()
  }

  loadBlogs() {
    this.service.getBlogs().subscribe(data => {
      this.user = data
    }, error => {
      console.log(error)
      this.router.navigate([''])
    });

  }
  ngOnInit(): void {
  }

}
