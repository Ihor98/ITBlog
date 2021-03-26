import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import {
  AddArticle,
  GetArticles,
} from '../../../article/store/article.actions';

@Component({
  selector: 'app-ba',
  templateUrl: './ba.component.html',
  styleUrls: ['./ba.component.scss'],
})
export class BaComponent implements OnInit {
  baArticles = [];
  add = false;
  creationArticleForm: FormGroup;

  categories = [
    { value: 'BE', viewValue: 'Backend' },
    { value: 'FE', viewValue: 'Frontend' },
    { value: 'BA', viewValue: 'Business Analysis' },
    { value: 'GD', viewValue: 'Game Development' },
  ];

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetArticles()).subscribe((art) => {
      this.baArticles = art.articles.articlesList.filter(
        (a) => a.category === 'BE'
      );
    });
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
