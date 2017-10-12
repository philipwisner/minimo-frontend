import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
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
  user: User;
  subscriptions = [];

  constructor(private blogService: BlogService,
              private authService: AuthService,
              private ActivatedRoute: ActivatedRoute,
             ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    let blogSubscription = this.ActivatedRoute.params.subscribe(params=>this.blogId = params['id']);
    this.blogService.getBlog(this.blogId).subscribe((data) => this.blog = data);
    let userSubscription = this.authService.userChange$.subscribe((user) => this.user = user);
    this.subscriptions.push(blogSubscription);
    this.subscriptions.push(userSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
