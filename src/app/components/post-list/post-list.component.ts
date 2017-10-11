import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user';
import { PostService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  user: User;
  subscriptions = [];
  posts: Object[];

  constructor(private postService: PostService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    let subscription = this.auth.userChange$.subscribe((user) => this.user = user);
    this.subscriptions.push(subscription);
    this.postService.getPostList()
    .subscribe((data) => {
      this.posts = data;
    });
  }


  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
