import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Article } from './models/article.model';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { GetArticles } from './article/store/article.actions';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ArticlesResolver implements Resolve<Article> {
  categoryFromRoute: string;
  articlesToSend: Observable<Article>;
  constructor(private store: Store) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    this.categoryFromRoute = route.params.category;
    return this.categoryFromRoute;
  }
}
