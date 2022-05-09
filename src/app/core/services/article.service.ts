import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Article} from '../interfaces/article.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

  addArticle(articleData: Article): Observable<Article[]> {
    return this.http.post<Article[]>(`http://localhost:3000/articles`, articleData);
  }

  deleteArticlw(i: number): Observable<Article[]> {
    return this.http.delete<Article[]>(`http://localhost:3000/profiles/${i}`);
  }

  updateArticleData(user: Article, id: number): Observable<Article[]> {
    return this.http.put<Article[]>(
      `http://localhost:3000/profiles/${id}`, user
    );
  }
}
