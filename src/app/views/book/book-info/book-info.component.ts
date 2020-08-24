import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/services/book/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/model/book/book';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {
  bookId = +this.activatedRoute.snapshot.paramMap.get('id'); //dấu cộng để ép kiểu
  book: Book;


  constructor(private bookService : BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBookById();
    // console.log(this.bookId);
  }

  getBookById = () => {
    this.bookService.getBookById(this.bookId).subscribe(res => {
      this.book = res;
      // console.log(this.book.title);
    })
  }
}
