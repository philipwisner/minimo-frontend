import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

const baseUrl = 'http://localhost:3000';
const URL = baseUrl + '/posts';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  user: User;
  subscriptions = [];
  userData: Object;

  formData = {
    userDescription: '',
  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    let subscription = this.auth.userChange$.subscribe((user) => this.user = user);
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  private handleUpdateUserInfo(myForm) {
    this.auth.insertNew(this.formData).subscribe();
    this.auth.getPostList().subscribe((data) => {
      this.user = data;
      this.router.navigate(['/profile']);
     });
  }
  //function to do an update to a user from user service!



}
