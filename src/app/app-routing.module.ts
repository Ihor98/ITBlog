import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './main-layout-component/main-content-component/hello/hello.component';
import { ArticlesComponent } from './main-layout-component/main-content-component/articles-component/articles.component';
import { ArticlesResolver } from './articles.resolver';
import { AuthComponent } from './pages/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full'},
  { path: 'auth', component: AuthComponent, children: [
      {path: '', redirectTo: 'register', pathMatch: 'full' },
      {path: 'register', component: RegisterComponent},
    ] },
  { path: ':category', component: ArticlesComponent, resolve: {data: ArticlesResolver} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
