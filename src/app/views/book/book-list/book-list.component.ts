import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/model/book/book';
import { BookService } from 'src/app/service/services/book/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [];
  bookLength: number;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks = () => {
    this.bookService.getAllBooks().subscribe(res =>{
      this.bookList = res;
      this.bookLength = this.bookList.length;
      // console.log(res);
    })
  }

  deleteBookById(id:number){
    this.bookService.deleteBookById(id).subscribe(res => {
      this.getAllBooks();
    } );
  }

}
