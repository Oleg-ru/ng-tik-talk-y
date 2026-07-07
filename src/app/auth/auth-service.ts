import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_API_URL = 'https://icherniakov.ru/yt-course/auth';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  login(payload: {username: string, password: string}) {
    const formData = new FormData();
    formData.append('username', payload.username);
    formData.append('password', payload.password
    );
    return this.http.post(`${BASE_API_URL}/token`, formData);
  }
}
