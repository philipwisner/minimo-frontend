import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  user: User;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.userChange$.subscribe((user) => this.user = user);
  }


}
