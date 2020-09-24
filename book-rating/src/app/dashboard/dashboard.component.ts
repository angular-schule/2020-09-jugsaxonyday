import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { getStaticBookList } from '../shared/book-data';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];
  cart: Book[] = [];

  constructor() { }

  ngOnInit(): void {
    this.books = getStaticBookList();
  }

  addToCart(book: Book): void {
    // this.cart.push(book);
    this.cart = [...this.cart, book];
  }

}
