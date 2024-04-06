import { Component, OnDestroy, OnInit } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Subscription } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { HttpClient } from '@angular/common/http';

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

  constructor(private authService: SocialAuthService, private logger: NGXLogger, private http: HttpClient) {}
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  ngOnInit() {
    this.authSubscription = this.authService.authState.subscribe((user) => {
      if(user != null) {
        console.log('user', user);
        this.title = user.name;
        this.isLoggedIn = true;
        this.email = user.email;
        this.http.post('http://localhost:3000/users/rsyslog', {
          action : 'login',
          user : this.title,
          email : this.email
        }).subscribe(response => {
          console.log(response)
        })
      }

    });
  }

  googleSignin(googleWrapper: any) {
    googleWrapper.click();
  }

  googleSignOut(): void  {
    this.http.post('http://localhost:3000/users/rsyslog', {
          action : 'logout',
          user : this.title,
          email : this.email
        }).subscribe(response => {
          console.log(response)
        })
    this.authService.signOut();
    this.title = 'my-app';
    this.email = '';
    this.isLoggedIn = false;
  }

}
