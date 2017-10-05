import { Component, OnInit, OnChanges } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, OnChanges {
  user: User;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.userChange$.subscribe((user) => this.user = user);
  }

  ngOnChanges() {
    this.auth.userChange$.subscribe((user) => this.user = user);
  }

  logout() {
    this.auth.logout().subscribe();
  }
}
