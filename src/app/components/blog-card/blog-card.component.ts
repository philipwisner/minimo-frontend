import { Component, OnInit, OnChanges } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Blog } from '../../models/blog';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  blogs: Object[];

  constructor(private blogService: BlogService, private authService: AuthService) { }

  ngOnInit() {
    this.blogService.getBlogList()
    .subscribe((data) => {
      this.blogs = data;
    });
  }

  }
