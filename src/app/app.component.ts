import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})

export class AppComponent implements OnInit {

  user: User;

  constructor(private session: AuthService) { }

  ngOnInit() {
    this.session.me().subscribe((user) => this.user = user);
  }
}
