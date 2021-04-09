import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import {
  AddArticle,
  GetArticles,
} from '../../../article/store/article.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'app-ba',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit, DoCheck {
  articles: Article[] = [];
  add = false;
  creationArticleForm: FormGroup;
  currentCategoryHeader: string;
  currentCategoryUrl: string;
  data;
  categories = [
    { value: 'be', viewValue: 'Backend' },
    { value: 'fe', viewValue: 'Frontend' },
    { value: 'articles-component', viewValue: 'Business Analysis' },
    { value: 'gd', viewValue: 'Game Development' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((val) => {
      this.articles = val.data.articles.articlesList.filter(
        (art) => art.category === this.router.url.slice(1)
      );
    });
  }

  ngDoCheck(): void {
    this.currentCategoryUrl = this.router.url;
    switch (this.currentCategoryUrl) {
      case '/be':
        this.currentCategoryHeader = 'Backend';
        break;
      case '/fe':
        this.currentCategoryHeader = 'Frontend';
        break;
      case '/articles-component':
        this.currentCategoryHeader = 'Business Analytics';
        break;
      case '/gd':
        this.currentCategoryHeader = 'Game Development';
        break;
    }
  }

  openNewArticleForm(): void {
    this.add = true;
    this.creationArticleForm = this.formBuilder.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      shrtText: ['', Validators.required],
      longText: ['', Validators.required],
      imgUrl: ['', Validators.required],
    });
  }

  saveArticle(formValue): void {
    this.add = false;
    this.store.dispatch(new AddArticle({ article: formValue }));
    this.store.dispatch(new GetArticles()).subscribe((val) => {
      this.articles = val.articles.articlesList.filter(
        (art) => art.category === this.router.url.slice(1)
      );
    });
  }
}
