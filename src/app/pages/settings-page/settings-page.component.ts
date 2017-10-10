import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
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

  saving: boolean;
  subscriptions = [];

  constructor(private auth: AuthService, private router: Router) { }

  setUser(user) {
    this.user = this.auth.getUser();
    if (this.user) {
      this.editUser = new User(this.user);
    }
  }

  ngOnInit() {
    this.setUser(this.auth.getUser());
    this.editUser = new User(this.user);
    let subscription = this.auth.userChange$.subscribe((user) => this.setUser(user))
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  handleSubmit() {
    this.saving = true;
    this.auth.updateUser(this.editUser).subscribe(() => {
      this.saving = false;
      this.router.navigate(['/profile']);
    });
  }

}
