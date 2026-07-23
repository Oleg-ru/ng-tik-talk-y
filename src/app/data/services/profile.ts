import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../interfaces/profile';
import { Pageble } from '../interfaces/pageble';
import { map, tap } from 'rxjs';

const BASE_API_URL = 'https://icherniakov.ru/yt-course';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  me = signal<Profile | null>(null);
  filteredProfiles = signal<Profile[]>([]);

  getTestAccounts() {
   return  this.http.get<Array<Profile>>(`${BASE_API_URL}/account/test_accounts`);
  }

  getMe() {
    return this.http.get<Profile>(`${BASE_API_URL}/account/me`)
      .pipe(
        tap(resp => this.me.set(resp))
      )
  }

  getAccount(id: string) {
    return this.http.get<Profile>(`${BASE_API_URL}/account/${id}`);

  }

  getSubscribersShortList(subsAmount = 3) {
    return this.http
      .get<Pageble<Profile>>(`${BASE_API_URL}/account/subscribers/`)
      .pipe(map((resp) => resp.items.slice(0, subsAmount)));
  }

  parchProfile(profile: Partial<Profile>) {
    return this.http.patch<Profile>(
      `${BASE_API_URL}/account/me`,
      profile
      );
  }

  uploadAvatar(file: File) {
    const fd = new FormData();
    fd.append('image', file)
    return this.http.post<Profile>(`${BASE_API_URL}/account/upload_image`, fd);
  }

  filterProfiles(params: Record<string, any>) {
    return this.http
      .get<Pageble<Profile>>(`${BASE_API_URL}/account/accounts`, {
        params,
      })
      .pipe(tap((resp) => this.filteredProfiles.set(resp.items)));
  }
}
