import { Component, input } from '@angular/core';
import { Profile } from '../../../data/interfaces/profile';
import { ImgUrlPipe } from '../../../helpers/pipes/img-url-pipe';
import { RouterLink } from '@angular/router';
import { SvgIcon } from '../../svg-icon/svg-icon';

@Component({
  selector: 'app-subscriber-card',
  imports: [ImgUrlPipe],
  templateUrl: './subscriber-card.html',
  styleUrl: './subscriber-card.scss',
})
export class SubscriberCard {
  profile = input.required<Profile>();
}
