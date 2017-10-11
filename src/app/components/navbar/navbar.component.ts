import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/posts.service';
import { environment } from '../../../environments/environment';

const URL = environment.apiUrl + '/auth/upload';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
@Input() userId;
  apiUrl = environment.apiUrl;
  showStyle = false;
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

  getStyle() {
    if(this.showStyle) {
      return "";
    } else {
      return "none";
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
