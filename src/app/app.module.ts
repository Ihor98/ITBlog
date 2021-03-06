import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponentComponent } from './main-layout-component/main-layout-component.component';
import { SidebarComponentComponent } from './main-layout-component/sidebar-component/sidebar-component.component';
import { MainContentComponentComponent } from './main-layout-component/main-content-component/main-content-component.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { ArticleState } from './article/store/article.state';
import { HelloComponent } from './main-layout-component/main-content-component/hello/hello.component';
import { ArticlesComponent } from './main-layout-component/main-content-component/articles-component/articles.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponentComponent,
    SidebarComponentComponent,
    MainContentComponentComponent,
    HelloComponent,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatTableModule,
    NgxsModule.forRoot([ArticleState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
