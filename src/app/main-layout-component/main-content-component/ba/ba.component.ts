import {Component, DoCheck, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import {
  AddArticle,
  GetArticles,
} from '../../../article/store/article.actions';
import {ActivatedRoute, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-ba',
  templateUrl: './ba.component.html',
  styleUrls: ['./ba.component.scss'],
})
export class BaComponent implements OnInit, DoCheck {
  articles = [];
  add = false;
  creationArticleForm: FormGroup;
  currentCategoryHeader: string;
  currentCategoryUrl: string;
  data;
  categories = [
    { value: 'be', viewValue: 'Backend' },
    { value: 'fe', viewValue: 'Frontend' },
    { value: 'ba', viewValue: 'Business Analysis' },
    { value: 'gd', viewValue: 'Game Development' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
/*    this.data = this.route.data.subscribe(val => {
      this.articles = val.data;
      console.log(this.articles);
    });*/
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
    this.route.data.subscribe(val => {
      this.data = val.data;
    });
    console.log(this.data);
/*    */
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
