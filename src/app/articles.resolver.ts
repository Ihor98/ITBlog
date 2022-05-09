import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Article } from './core/interfaces/article.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ArticlesResolver implements Resolve<Article> {
  categoryFromRoute: string;
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    // this.categoryFromRoute = route.params.category;
    // return this.store.dispatch(new GetArticles());
  }
}
