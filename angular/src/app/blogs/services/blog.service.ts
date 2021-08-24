import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from "../../shared/auth.service"


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, private service: AuthService) {
  }

  getAllBlogs() {
    let user = this.service?.getCurrentUser()
    let guid = user?.uid || 0
    let name = user?.displayName
    let url = "http://localhost:3000/blogs?guid=" + guid + "&displayName=" + name
    return this.http.get(url)
  }

  getBlogs() {
    let user = this.service?.getCurrentUser()
    let guid = user?.uid || 0
    let name = user?.displayName
    let url = "http://localhost:3000/blogs/blog?guid=" + guid + "&displayName=" + name
    return this.http.get(url)
  }

  postBlog(data: any) {
    let user = this.service?.getCurrentUser()
    let guid = user?.uid || 0
    let name = user?.displayName
    let url = "http://localhost:3000/blogs/insert?guid=" + guid + "&displayName=" + name
    return this.http.post(url, data)
  }
}
