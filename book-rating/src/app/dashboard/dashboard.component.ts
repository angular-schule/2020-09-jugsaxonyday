import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { getStaticBookList } from '../shared/book-data';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];
  cart: Book[] = [];

  constructor(private bs: BookStoreService) { }

  ngOnInit(): void {
    this.bs.getAll()
      .subscribe(books => this.books = books);
  }

  addToCart(book: Book): void {
    // this.cart.push(book);
    this.cart = [...this.cart, book];
  }

}
