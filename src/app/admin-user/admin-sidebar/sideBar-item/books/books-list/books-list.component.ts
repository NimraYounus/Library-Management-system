import { Component } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent {
  booksCategories = [
    {
      booksCategories: 'English Novels',
      books: [
        {
          bookName: '',
          author: '',
          discription: '',
          barCode: '',
          yearOfPublish: '',
          reviews: '',
          bookImge: '',
          bookStatus: '',
        },
      ],
    },
    {
      booksCategories: 'English Novels',
      books: [
        {
          bookName: '',
          author: '',
          discription: '',
          barCode: '',
          yearOfPublish: '',
          reviews: '',
          bookImge: '',
          bookStatus: '',
        },
      ],
    },
  ];
}
