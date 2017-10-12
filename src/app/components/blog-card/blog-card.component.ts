import { Component, OnInit, OnChanges } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  blogs: Object[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlogList()
    .subscribe((data) => {
      this.blogs = data;
    });
  }

  }
