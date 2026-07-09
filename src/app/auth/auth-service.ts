import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { TokenResponse } from './auth';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

const BASE_API_URL = 'https://icherniakov.ru/yt-course/auth';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  router = inject(Router);

  cookieService = inject(CookieService);

  token: string | null = null;
  refreshToken: string | null = null;

  get isAuth() {
    if (!this.token) {
      this.token = this.cookieService.get('token');
      this.refreshToken  = this.cookieService.get('refreshToken');
    }
    return !!this.token;
  }

  login(payload: {username: string, password: string}) {
    const formData = new FormData();
    formData.append('username', payload.username);
    formData.append('password', payload.password
    );
    return this.http.post<TokenResponse>(`${BASE_API_URL}/token`, formData)
      .pipe(
        tap(val => this.saveTokens(val))
      );
  };

  logout() {
    this.cookieService.delete('token');
    this.cookieService.delete('refreshToken');
    this.token = null;
    this.refreshToken = null;
    this.router.navigate(['/login'])
  };

  refreshAuthToken() {
    return this.http
      .post<TokenResponse>(`${BASE_API_URL}/refresh`, {
        refresh_token: this.refreshToken,
      })
      .pipe(
        tap((val) => this.saveTokens(val)),
        catchError((error) => {
          this.logout();
          return throwError(error);
        }),
      );
  };

  saveTokens(res: TokenResponse) {
    this.token = res.access_token;
    this.refreshToken = res.refresh_token;

    this.cookieService.set('token', this.token);
    this.cookieService.set('refreshToken', this.refreshToken);
  }
}
