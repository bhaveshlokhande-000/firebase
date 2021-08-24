import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {

  @Output() loadBlogs: EventEmitter<any> = new EventEmitter()
  constructor(private service: BlogService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(event: any) {
    let formData = new FormData(event.target)
    this.service.postBlog(formData).subscribe((result) => {
      setTimeout(() => {
        event.target.reset()
        this.loadBlogs.emit()
      }, 1000)

    }, (error) => {
      console.log(error)
    })
  }
}

/*
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

  @Output() addBlog: EventEmitter<any> = new EventEmitter()
  constructor(private service: BlogService, private router: Router) { }

  let data = {
      "title": event.target.title.value,
      "body": event.target.body.value,
      "image": event.target.image.files[0].name
    }

  this.addBlog.emit(data)

*/