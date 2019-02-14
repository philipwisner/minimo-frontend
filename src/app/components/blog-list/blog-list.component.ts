import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: Object[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlogList()
    .subscribe((data) => {
      this.blogs = data;
    });
  }

  updateSort(value) {
    if (value === 'Newest') {
      this.blogService.getBlogList()
        .subscribe((data) => {
          this.blogs = data;
        });
    }
    if (value === 'Oldest') {
      this.blogService.getReverseList()
        .subscribe((data) => {
          this.blogs = data;
        });
    }
  }

}
