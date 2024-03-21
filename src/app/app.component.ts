import { Component, OnDestroy, OnInit } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-app';
  email = '';
  isLoggedIn: boolean = false;
  authSubscription!: Subscription;

  constructor(private authService: SocialAuthService) {}
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  ngOnInit() {
    this.authSubscription = this.authService.authState.subscribe((user) => {
      console.log('user', user);
      this.title = user.name;
      this.isLoggedIn = true;
      this.email = user.email;
    });
  }

  googleSignin(googleWrapper: any) {
    googleWrapper.click();
  }

  googleSignOut(): void  {
    this.authService.signOut();
    location.reload()
  }

}