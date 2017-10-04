import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  user = new User({
    name: '',
    email: '',
    password: ''
  });

  error: string;

  constructor(private auth: AuthService) { }

  signup() {
    this.error = null;
    this.auth.signup(this.user).subscribe(
      (user) => this.user = user,
      (err) => this.error = err
    );
  }

  ngOnInit() {
  }

}
