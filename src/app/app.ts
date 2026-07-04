import { Component, inject, signal } from '@angular/core';
import { ProfileCard } from './common-ui/profile-card/profile-card';
import { ProfileService } from './data/services/profile';
import { JsonPipe } from '@angular/common';
import { Profile } from './data/interfaces/profile';

@Component({
  selector: 'app-root',
  imports: [ProfileCard, JsonPipe],
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
