import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './main-layout-component/main-content-component/hello/hello.component';
import { BaComponent } from './main-layout-component/main-content-component/ba/ba.component';
import { BeComponent } from './main-layout-component/main-content-component/be/be.component';
import { FeComponent } from './main-layout-component/main-content-component/fe/fe.component';
import { GdComponent } from './main-layout-component/main-content-component/gd/gd.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'ba', component: BaComponent },
  { path: 'be', component: BeComponent },
  { path: 'fe', component: FeComponent },
  { path: 'gd', component: GdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
