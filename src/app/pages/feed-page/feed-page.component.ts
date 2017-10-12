import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/posts.service';
import { Post } from '../../models/post';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {
user: User;
posts: Object[];
showStyle = false;
expanded = false;

  constructor(private postService: PostService, private auth: AuthService, private router: Router) { }
  ngOnInit() {
    this.postService.getPostList()
    .subscribe((data) => {
      this.posts = data;
    });
  }

  ngOnChanges() {
    this.postService.getPostList()
    .subscribe((data) => {
      this.posts = data;
    });
  }


  handleExpandConent() {
    this.expanded = !this.expanded;
  }

  }
