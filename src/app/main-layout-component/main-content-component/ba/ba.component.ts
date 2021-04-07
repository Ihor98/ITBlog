import {Component, DoCheck, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import {
  AddArticle,
  GetArticles,
} from '../../../article/store/article.actions';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ba',
  templateUrl: './ba.component.html',
  styleUrls: ['./ba.component.scss'],
})
export class BaComponent implements OnInit, DoCheck {
  baArticles = [];
  add = false;
  creationArticleForm: FormGroup;
  currentCategoryHeader: string;
  currentCategoryUrl: string;

  categories = [
    { value: 'BE', viewValue: 'Backend' },
    { value: 'FE', viewValue: 'Frontend' },
    { value: 'BA', viewValue: 'Business Analysis' },
    { value: 'GD', viewValue: 'Game Development' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new GetArticles()).subscribe((art) => {
      this.baArticles = art.articles.articlesList.filter(
        (a) => a.category === 'BE'
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
      case '/ba':
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
  }
}
