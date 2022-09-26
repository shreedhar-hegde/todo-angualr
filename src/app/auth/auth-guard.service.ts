import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: SocialAuthService, private router: Router) {}
  user!: SocialUser;
  loggedIn: boolean = false;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user')!);
      this.loggedIn = true;
    } else {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = user != null;
      });
      this.router.navigateByUrl('');
    }
    return this.loggedIn ? true : false;
  }
}
