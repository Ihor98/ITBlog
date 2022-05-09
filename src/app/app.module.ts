import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponentComponent } from './main-layout-component/main-layout-component.component';
import { SidebarComponentComponent } from './main-layout-component/sidebar-component/sidebar-component.component';
import { MainContentComponentComponent } from './main-layout-component/main-content-component/main-content-component.component';
import { HelloComponent } from './main-layout-component/main-content-component/hello/hello.component';
import { ArticlesComponent } from './main-layout-component/main-content-component/articles-component/articles.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

const MATERIAL = [
  MatTableModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponentComponent,
    SidebarComponentComponent,
    MainContentComponentComponent,
    HelloComponent,
    ArticlesComponent,
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    ...MATERIAL,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
