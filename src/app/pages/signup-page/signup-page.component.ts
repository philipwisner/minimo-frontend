import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
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
  message: string;
  missingCredentials: string;

  constructor(private auth: AuthService, private router: Router) { }

  signup() {
    this.error = null;
    if (!this.user.name || !this.user.email || !this.user.password) {
      this.missingCredentials = 'Missing credentials';
      return;
    }
    this.auth.signup(this.user).subscribe(
      (user) => {
      	if(user.email){
      		this.user = user;
      		this.router.navigate(['/profile/settings']);
      	} else {
          this.message;
        }
      },
      (err) => {
        console.log('err is', err);
        if (err.statusText === "Unprocessable Entity") {
          this.error = "Email already used";
          return;
        } else {
          this.error = err;
        }
      }
    );
  }

  ngOnInit() {
  }

}