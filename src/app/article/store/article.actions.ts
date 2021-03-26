import { Article } from '../../models/article.model';

export class AddArticle {
  static readonly type = '[Article] Add Article';
  static readonly description = 'Adding article to articles list';
  constructor(public payload: { article: Article}) {}
}

export class GetArticles {
  static readonly type = '[Article] Get Articles';
  static readonly description = 'Getting articles from articles list';
}

export class DeleteArticle {
  static readonly type = '[Article] Delete Article';
  static readonly description = 'Deleting article from users list';
  constructor(public id: number) {}
}

export class UpdateArticle {
  static readonly type = '[Article] Update Article';
  static readonly description = 'Updating article data';
  constructor(public payload: { data: Article; id: number }) {}
}
