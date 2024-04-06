import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from "@abacritt/angularx-social-login";
import { GoogleSigninComponent } from './google-signin/google-signin.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpLoggingInterceptor } from './http-logging-interceptor.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GoogleSigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule,
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: 'localhost:3000/users/rsyslog',
      level: NgxLoggerLevel.LOG, // Adjust logging level as needed
      serverLogLevel: NgxLoggerLevel.LOG, // Adjust server log level as needed
      disableConsoleLogging: false, // Whether to disable console logging
    })
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('377767700577-1910822eqv00nboho5asirhnbtofhl2q.apps.googleusercontent.com', {
              scopes: 'openid profile email',
            }),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpLoggingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
