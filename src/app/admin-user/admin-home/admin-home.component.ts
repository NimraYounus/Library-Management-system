import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent {
  cardList = [
    {
      icon: 'people',
      name: 'TOTAL MEMBERS',
      quantity: '105',
    },
    {
      icon: 'library_add_check',
      name: 'ISSUED BOOKS',
      quantity: '30',
    },
    {
      icon: 'keyboard_return',
      name: 'NOT RETURNED',
      quantity: '',
    },
    {
      icon: 'Online Prediction',
      name: 'LOGGED IN USERS',
      quantity: '5',
    },
  ];
}
