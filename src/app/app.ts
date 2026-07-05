import { Component, inject, signal } from '@angular/core';
import { ProfileCard } from './common-ui/profile-card/profile-card';
import { ProfileService } from './data/services/profile';
import { Profile } from './data/interfaces/profile';

@Component({
  selector: 'app-root',
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  profile = inject(ProfileService);
  profiles = signal<Array<Profile>>([]);

  constructor() {
    this.profile.getTestAccounts().subscribe((value) => {
      this.profiles.set(value);
    });
  }
}
