import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DemoMaterialModule} from './material-module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AvatarModule } from 'ngx-avatar';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeaderComponent } from './header/header.component';
import { FieldsComponent } from './fields/fields.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NewArticlePageComponent } from './new-article-page/new-article-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeaderComponent,
    FieldsComponent,
    NewsComponent,
    ArticleComponent,
    HomepageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AdminPageComponent,
    NewArticlePageComponent,
    ArticlePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
