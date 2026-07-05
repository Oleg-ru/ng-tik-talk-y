import { Component, inject, signal } from '@angular/core';
import { ProfileCard } from '../../common-ui/profile-card/profile-card';
import { ProfileService } from '../../data/services/profile';
import { Profile } from '../../data/interfaces/profile';

@Component({
  selector: 'app-search-page',
  imports: [ProfileCard],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss',
})
export class SearchPage {
  profile = inject(ProfileService);
  profiles = signal<Array<Profile>>([]);

  constructor() {
    this.profile.getTestAccounts().subscribe((value) => {
      this.profiles.set(value);
    });
  }
}
