import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/posts.service';
import { BlogService } from '../../services/blog.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { Post } from '../../models/post';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['./blog-post-card.component.scss']
})

export class BlogPostCardComponent implements OnInit {
  posts: Object[];
  blog: Object;
  blogId : string;
  user: User;
  subscriptions = [];

  constructor(private postService: PostService,
              private authService: AuthService,
              private blogService: BlogService,
              private ActivatedRoute: ActivatedRoute
            ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    let blogSubscription = this.ActivatedRoute.params.subscribe(params=>this.blogId = params['id']);
    this.blogService.getBlog(this.blogId).subscribe((data) => this.blog = data);
    let userSubscription = this.authService.userChange$.subscribe((user) => this.user = user);
    this.postService.getPostListbyBlog(this.blogId)
    .subscribe((data) => {
      this.posts = data;
    });
    this.subscriptions.push(blogSubscription);
    this.subscriptions.push(userSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
