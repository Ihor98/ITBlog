import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './main-layout-component/main-content-component/hello/hello.component';
import { BaComponent } from './main-layout-component/main-content-component/ba/ba.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: ':category', component: BaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
