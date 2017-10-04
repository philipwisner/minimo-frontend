import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user = new User({
    email: '',
    password: ''
  });
  error: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.error = null;
    this.auth.login(this.user).subscribe(
      (user) => this.user = user,
      (err) => this.error = err
    );
  }
}
