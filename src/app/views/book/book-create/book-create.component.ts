import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/services/book/book.service';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
// import { Book } from 'src/app/service/model/book/book';



@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private bookService: BookService,
              private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group(
      {
        title: ['', [Validators.required,  Validators.minLength(2)]],
        author: ['', [Validators.required,  Validators.minLength(2)]],
        desscription: ['', [Validators.required,  Validators.minLength(10)]],
      }
    );
  }

  createNewBook() {
    const data = this.bookForm.value;
    // console.log(data)
    this.bookService.createNewBook(data).subscribe(res => {
        window.alert('Thêm mới thành công!');
        this.router.navigate(['/books']);
      });
  }
}
