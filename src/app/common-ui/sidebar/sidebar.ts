import { Component } from '@angular/core';
import { SvgIcon } from '../svg-icon/svg-icon';
import { SubscriberCard } from './subscriber-card/subscriber-card';

@Component({
  selector: 'app-sidebar',
  imports: [SvgIcon, SubscriberCard],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
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
  userProfile = {
    id: 1,
    username: 'johndoe',
    description: 'Full-stack developer passionate about Angular and TypeScript',
    avatarUrl: 'https://example.com/avatars/johndoe.jpg',
    subscribersAmount: 1250,
    firstName: 'John',
    lastName: 'Doe',
    isActive: true,
    stack: ['Angular', 'React', 'Node.js', 'TypeScript', 'Python'],
  };
}
