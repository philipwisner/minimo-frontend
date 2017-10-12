import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/posts.service';
import { environment } from '../../../environments/environment';

const URL = environment.apiUrl + '/auth/upload';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {
@Input() userId;
  apiUrl = environment.apiUrl;
  user: User;
  subscriptions = [];

  constructor(private auth: AuthService, private postService: PostService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    let subscription = this.auth.userChange$.subscribe((user) => this.user = user);
    this.subscriptions.push(subscription);
  }

  sortOldest() {
    this.postService.getPostListOldest()
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  }
