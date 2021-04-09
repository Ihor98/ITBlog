import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './main-layout-component/main-content-component/hello/hello.component';
import { ArticlesComponent } from './main-layout-component/main-content-component/articles-component/articles.component';
import { ArticlesResolver } from './articles.resolver';

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: ':category', component: ArticlesComponent, resolve: {data: ArticlesResolver} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
