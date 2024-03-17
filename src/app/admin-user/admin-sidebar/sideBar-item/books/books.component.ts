import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  BooksList = [
    {
      memberId: '#48964',
      memberName: 'Karla Morrison',
      bookName: 'Mangolia Palace',
      bookAuther: 'Cristofer Bator',
      borrowedDate:'17/3/2023',
      returnDate:'12/3/2023',
      status: 'Available',
    },
  ];
}
