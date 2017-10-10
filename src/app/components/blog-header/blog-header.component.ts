import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss']
})
export class BlogHeaderComponent implements OnInit {
  blog: Object;
  blogId : string;

  constructor(private blogService: BlogService, private authService: AuthService) { }

  ngOnInit() {
      this.blogService.getBlog(this.blogId).subscribe((data) => this.blog = data);
  }

}
