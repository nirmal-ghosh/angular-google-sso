import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpLoggingInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request.url)
    if (request.url === 'http://192.168.245.128:514') {
      console.log('Logging request intercepted:', request);
      // Optionally, inspect the request body to verify login/logout logs
    }
    return next.handle(request);
  }
}
