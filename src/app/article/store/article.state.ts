import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {AddArticle, GetArticles} from './article.actions';
import { ArticleService } from '../article.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Defaults } from './defaults/defaults';
import { Article } from '../../models/article.model';

export class ArticleModel {
  articlesList: Article[];
  article: Article;
}

@State<ArticleModel>({
  name: 'articles',
  defaults: Defaults.articleState,
})
@Injectable()
export class ArticleState {
  constructor(private articleService: ArticleService) {}

  @Selector()
  static getArticles({ articlesList }: ArticleModel): Article[] {
    return articlesList;
  }

  @Action(GetArticles)
  getUsers({ patchState }: StateContext<ArticleModel>): Observable<Article[]> {
    return this.articleService.getArticles().pipe(
      tap((articlesList) => {
        patchState({ articlesList });
      })
    );
  }

  @Action(AddArticle)
  saveForm(
    { patchState }: StateContext<ArticleModel>,
    { payload }: AddArticle
  ): Observable<Article[]> {
    return this.articleService.addArticle(payload.article).pipe(
      tap((articlesList) => {
        patchState({ articlesList });
      })
    );
  }

  /*  @Action(DeleteUser)
  deleteUser(
    { patchState }: StateContext<UserStateModel>,
    { id }: DeleteUser
  ): Observable<User[]> {
    return this.userService.deleteUser(id).pipe(
      tap((usersList) => {
        patchState({ usersList });
      })
    );
  }

  @Action(UpdateUser)
  updateUser(
    { patchState }: StateContext<UserStateModel>,
    { payload }: UpdateUser
  ): Observable<User[]> {
    const { data, id } = payload;
    return this.userService.updateUserData(data, id).pipe(
      tap((usersList) => {
        patchState({ usersList });
      })
    );
  }*/
}
