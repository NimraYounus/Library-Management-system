import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  showBookStatus = false;
  BooksList = [
    {
      memberId: '#48964',
      memberName: 'Karla Morrison',
      bookName: 'Mangolia Palace',
      bookAuther: 'Cristofer Bator',
      borrowedDate: '17/3/2023',
      returnDate: '12/3/2023',
      status: 'Available',
    },
    {
      memberId: '#48964',
      memberName: 'Karla Morrison',
      bookName: 'Mangolia Palace',
      bookAuther: 'Cristofer Bator',
      borrowedDate: '17/3/2023',
      returnDate: '12/3/2023',
      status: 'Renew',
    },
    {
      memberId: '#48964',
      memberName: 'Karla Morrison',
      bookName: 'Mangolia Palace',
      bookAuther: 'Cristofer Bator',
      borrowedDate: '17/3/2023',
      returnDate: '12/3/2023',
      status: 'Reserved',
    },
    {
      memberId: '#48964',
      memberName: 'Karla Morrison',
      bookName: 'Mangolia Palace',
      bookAuther: 'Cristofer Bator',
      borrowedDate: '17/3/2023',
      returnDate: '12/3/2023',
      status: 'Available',
    },
    {
      memberId: '#48964',
      memberName: 'Karla Morrison',
      bookName: 'Mangolia Palace',
      bookAuther: 'Cristofer Bator',
      borrowedDate: '17/3/2023',
      returnDate: '12/3/2023',
      status: 'Borrowed',
    },
    {
      memberId: '#48964',
      memberName: 'Karla Morrison',
      bookName: 'Mangolia Palace',
      bookAuther: 'Cristofer Bator',
      borrowedDate: '17/3/2023',
      returnDate: '12/3/2023',
      status: 'Borrowed',
    },
    {
      memberId: '#48964',
      memberName: 'Karla Morrison',
      bookName: 'Mangolia Palace',
      bookAuther: 'Cristofer Bator',
      borrowedDate: '17/3/2023',
      returnDate: '12/3/2023',
      status: 'Available',
    },
    {
      memberId: '#48964',
      memberName: 'Karla Morrison',
      bookName: 'Mangolia Palace',
      bookAuther: 'Cristofer Bator',
      borrowedDate: '17/3/2023',
      returnDate: '12/3/2023',
      status: 'Available',
    },
    {
      memberId: '#48964',
      memberName: 'Karla Morrison',
      bookName: 'Mangolia Palace',
      bookAuther: 'Cristofer Bator',
      borrowedDate: '17/3/2023',
      returnDate: '12/3/2023',
      status: 'Available',
    },
  ];

  changeShowBookStatus() {
    this.showBookStatus = !this.showBookStatus;
  }
}
