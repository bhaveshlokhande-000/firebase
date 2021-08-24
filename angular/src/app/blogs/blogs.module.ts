import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { HeaderComponent } from './header/header.component';
import { PostBlogComponent } from './post-blog/post-blog.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { BlogComponent } from './blog/blog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    PostBlogComponent,
    AllBlogsComponent,
    MyBlogsComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    FormsModule
  ],
  exports: [
    AllBlogsComponent,
    MyBlogsComponent,
  ]
})
export class BlogsModule { }
