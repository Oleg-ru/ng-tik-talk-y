import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../interfaces/profile';

const BASE_API_URL = 'https://icherniakov.ru/';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);

  getTestAccounts() {
   return  this.http.get<Array<Profile>>(`${BASE_API_URL}yt-course/account/test_accounts`);
  }
}
