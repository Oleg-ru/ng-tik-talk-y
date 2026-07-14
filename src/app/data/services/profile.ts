import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../interfaces/profile';
import { Pageble } from '../interfaces/pageble';
import { map } from 'rxjs';

const BASE_API_URL = 'https://icherniakov.ru/yt-course';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);

  getTestAccounts() {
   return  this.http.get<Array<Profile>>(`${BASE_API_URL}/account/test_accounts`);
  }

  getMe() {
    return this.http.get<Profile>(`${BASE_API_URL}/account/me`)
  }

  getSubscribersShortList() {
    return this.http.get<Pageble<Profile>>(`${BASE_API_URL}/account/subscribers/`)
      .pipe(
        map(resp => resp.items.slice(0, 3))
      )
  }
}
