import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';
  showFiller = false;

  user!: SocialUser;
  loggedIn!: boolean;

  constructor(private authService: SocialAuthService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('user')) {
      console.log('reached app if');
      this.user = JSON.parse(localStorage.getItem('user')!);
      this.loggedIn = this.user != null;
    } else {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = user != null;
        if (!this.loggedIn) {
          this.router.navigateByUrl('');
        }
      });
    }
  }

  signOut(): void {
    localStorage.removeItem('user');
    this.authService.signOut().then((res) => {
      this.router.navigateByUrl('');
    });
  }
}
