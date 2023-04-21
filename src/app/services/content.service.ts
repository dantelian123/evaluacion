import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../model/author.model';
import { HttpClient } from '@angular/common/http';
import { Titulo } from '../model/title.model';
import { Poetry } from '../model/poetry.model';
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  url: string = "https://poetrydb.org/"

  constructor(private http: HttpClient) { }

  getAuthor(): Observable<Author> {

    return this.http.get<Author>(this.url + "author");
  }

  getTitle(title:string):Observable<Titulo>{
    return this.http.get<Titulo>(this.url+`author/${title}/title`);
  }

  getPoetryByTitle(title: string): Observable<Poetry>{
    return this.http.get<Poetry>(this.url+`title/${title}`);
  }

}
