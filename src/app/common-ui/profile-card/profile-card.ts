import { Component, input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile';
import { ImgUrlPipe } from '../../helpers/pipes/img-url-pipe';

@Component({
  selector: 'app-profile-card',
  imports: [ImgUrlPipe],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
})
export class ProfileCard {
  public profile = input<Profile>();
  protected readonly crypto = crypto;
}
