import { Component, inject } from '@angular/core';
import { SvgIcon } from '../svg-icon/svg-icon';
import { SubscriberCard } from './subscriber-card/subscriber-card';
import { ProfileService } from '../../data/services/profile';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [SvgIcon, SubscriberCard, AsyncPipe, JsonPipe, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  profileService = inject(ProfileService);
  subscribers$ = this.profileService.getSubscribersShortList();

  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: '',
    },
    {
      label: 'Чат',
      icon: 'chat',
      link: 'chats',
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: 'search',
    },
  ];
}
