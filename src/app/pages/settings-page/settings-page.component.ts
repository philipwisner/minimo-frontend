import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';

const baseUrl = 'http://localhost:3000';
const URL = baseUrl + '/auth/users';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  @Input() userId;
  apiUrl = environment.apiUrl;
  userData: Object;
  user: User;
  editUser: User;

  subscriptions = [];

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    let subscription = this.auth.userChange$.subscribe((user) => this.user = user);
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  updateUserInfo() {
    this.auth.updateUser(this.editUser).subscribe();
    this.editUser = new User(this.user);
  }

}
