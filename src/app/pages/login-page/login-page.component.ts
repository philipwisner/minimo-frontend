import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  message: any;
  missingCredentials: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
      this.error = null;
      if (!this.user.email || !this.user.password) {
        this.missingCredentials = 'Email and password are required';
        return;
      }
      this.auth.login(this.user).subscribe(
        (user) => {
        	if(user.email){
        		this.user = user,
        		this.router.navigate(['/profile/posts']);
        	} else {this.message}
        },
        (err) =>{
          if (err.statusText === "Not Found") {
            this.error = 'Invalid email or password';
            return;
          } else {
            this.error = err
          }
        }
      );
    }
}