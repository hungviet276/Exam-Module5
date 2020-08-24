import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = environment.URL;

  constructor(public http: HttpClient) { }

  getAllBooks = () :Observable<any> => {
    return this.http.get(this.url + 'books');
  }

  deleteBookById = (id: number) :Observable<any> => {
    return this.http.delete<any>(this.url + 'books/' + id);
  }

  createNewBook(data: any): Observable<any> {
    return this.http.post<any>(this.url + 'books', data);
  }

  getBookById(id: number): Observable<any> {
    return this.http.get(this.url + "books/" + id);
  }

  editBookById(data: any, id: number): Observable<any> {
    return this.http.put<any>(this.url + "books/" + id, data);
  }
}
