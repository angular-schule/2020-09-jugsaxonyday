import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Output() cartAdd = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.cartAdd.emit(this.book);
  }

}
