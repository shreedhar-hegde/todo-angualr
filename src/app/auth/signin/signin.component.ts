import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  user!: SocialUser;
  loggedIn!: boolean;
  constructor(
    private router: Router,
    public socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user')!);
      this.router.navigateByUrl('/task-tracker');
    } else {
      this.socialAuthService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = user != null;
        if (this.loggedIn) {
          console.log('reached nested if signin');
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigateByUrl('/task-tracker');
        } else {
          this.loggedIn = false;
        }
      });
    }
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
