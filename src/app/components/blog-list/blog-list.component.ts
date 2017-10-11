import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Blog } from '../../models/blog';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: Object[];

  constructor(private blogService: BlogService, private authService: AuthService) { }

  ngOnInit() {
    this.blogService.getBlogList()
    .subscribe((data) => {
      this.blogs = data;
    });
  }

}
