import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { PostService } from '../../services/posts.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: [Post];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getYourPostList()
    .subscribe((data) => {
      this.posts = data;
    });
  }

  updateSort(value) {
    if (value === 'Newest') {
      this.postService.getYourPostList()
        .subscribe((data) => {
          this.posts = data;
      });
    }
    if (value === 'Oldest') {
      this.postService.getYourReverseList()
        .subscribe((data) => {
          this.posts = data;
      });
    }
  }

}
