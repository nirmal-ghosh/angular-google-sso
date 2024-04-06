import { TestBed } from '@angular/core/testing';

import { HttpLoggingInterceptorService } from './http-logging-interceptor.service';

describe('HttpLoggingInterceptorService', () => {
  let service: HttpLoggingInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpLoggingInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
