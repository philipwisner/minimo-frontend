import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/posts.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {
user: User;
subscriptions = [];

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    let subscription = this.auth.userChange$.subscribe((user) => this.user = user);
    this.subscriptions.push(subscription);
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
