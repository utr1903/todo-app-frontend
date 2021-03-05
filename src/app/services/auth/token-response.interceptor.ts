import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class TokenResponseInterceptor implements HttpInterceptor {

  constructor(
    private _authService: AuthService,
    private _router: Router
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) { // Unauthorized
            this._authService.collectFailedRequest(request);
            this._router.navigate(['/login']);
          }
        }
      }
    ));
  }
}
