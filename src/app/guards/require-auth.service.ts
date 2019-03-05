import { Injectable } from '@angular/core';
import { Observable }  from 'rxjs/Rx';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

//validate guards for not being logged in
@Injectable()
export class RequireAuthService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.me()) {
      return true;
    } else {
      this.router.navigate(['auth/login']);
      return false;
    }
  }

}
