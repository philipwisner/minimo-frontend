import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/posts.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Post } from '../../models/post';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  posts: Object[];

  constructor(private postService: PostService, private authService: AuthService) { }


  ngOnInit() {
    this.postService.getPostList()
    .subscribe((data) => {
      this.posts = data;
    });
  }

}
