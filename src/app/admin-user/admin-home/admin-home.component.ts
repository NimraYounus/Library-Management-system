import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

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
      quantity: '55',
    },
    {
      icon: 'login',
      name: 'LOGGED IN USERS',
      quantity: '5',
    },
  ];
  overDuesPeople = [
    {
      memberId: '#48964',
      memberName: 'Karla Morrison',
      BookNo: '2332',
      dueday: '1',
      duedate: '17/3/2024',
      fine: '50',
    },
    {
      memberId: '#48964',
      memberName: 'Mamie Rodgers',
      BookNo: '1234',
      dueday: '3',
      duedate: '17/3/2024',
      fine: '150',
    },
    {
      memberId: '#48964',
      memberName: 'Terence Reese',
      BookNo: '4321',
      dueday: '2',

      duedate: '17/3/2024',
      fine: '100',
    },
    {
      memberId: '#48964',
      memberName: 'Karla Morrison',
      BookNo: '9876',
      dueday: '1',
      duedate: '17/3/2024',
      fine: '50',
    },

    {
      memberId: '#48964',
      memberName: 'Diana Curry',
      BookNo: '6543',
      dueday: '4',
      duedate: '17/3/2024',
      fine: '200',
    },
    {
      memberId: '#48964',
      memberName: 'Gilbert Santos',
      BookNo: '1234',
      dueday: '2',
      duedate: '17/3/2024',
      fine: '100',
    },
    {
      memberId: '#48964',
      memberName: 'Karla Morrison',
      BookNo: '2332',
      dueday: '1',
      duedate: '17/3/2024',
      fine: '50',
    },
    {
      memberId: '#48964',
      memberName: 'Mamie Rodgers',
      BookNo: '1234',
      dueday: '3',
      duedate: '17/3/2024',
      fine: '150',
    },
    {
      memberId: '#48964',
      memberName: 'Terence Reese',
      BookNo: '4321',
      dueday: '2',

      duedate: '17/3/2024',
      fine: '100',
    },
  ];
  highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'Check-out Statistics',
    },
    subtitle: {
      text: 'Report',
    },
    xAxis: {
      categories: [
        'New Book Last Day',
        'Book Issued',
        'New Members',
        'Not Return',
      ],
    },
    yAxis: {
      title: {
        text: 'Quantity',
      },
    },
    series: [
      {
        name: '',
        data: [15, 48, 150, 4],
        type: 'spline', // Specify the type of series
      },
    ],
  };
  BooksList=[
  {bookName:'Mangolia Palace', bookAuther:'Cristofer Bator', status:'Available'},
]
  editMember() {
    //
  }

  deleteMember() {
    //
  }
}
