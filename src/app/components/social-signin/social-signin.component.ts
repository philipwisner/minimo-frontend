import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-social-signin',
  templateUrl: './social-signin.component.html',
  styleUrls: ['./social-signin.component.scss']
})
export class SocialSigninComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  google() {
    this.auth.google().subscribe();
  }

}
