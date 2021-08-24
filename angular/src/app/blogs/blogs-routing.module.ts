import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';

const routes: Routes = [
  { path: "allblogs", component: AllBlogsComponent },
  { path: "blogs", component: MyBlogsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
