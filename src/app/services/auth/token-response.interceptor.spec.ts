import { TestBed } from '@angular/core/testing';

import { TokenResponseInterceptor } from './token-response.interceptor';

describe('TokenResponseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenResponseInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenResponseInterceptor = TestBed.inject(TokenResponseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
