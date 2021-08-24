import { Component, OnInit } from '@angular/core';
import { BlogService } from "../services/blog.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})

export class AllBlogsComponent implements OnInit {
  users: Array<any> = []
  constructor(private service: BlogService, private router: Router) {
    this.loadBlogs()
  }

  loadBlogs() {
    this.service.getAllBlogs().subscribe(data => {
      this.users = data as Array<any>
    }, error => {
      console.log(error)
      this.router.navigate([''])
    })
  }

  ngOnInit(): void {
  }

}
