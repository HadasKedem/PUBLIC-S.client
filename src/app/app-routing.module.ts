import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewArticlePageComponent } from './new-article-page/new-article-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';



const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent},
  { path: 'admin', component: AdminPageComponent},
  { path: 'newarticle', component: NewArticlePageComponent},
  { path: 'article', component:  ArticlePageComponent},
  // { path: 'article/:id', component:  ArticlePageComponent},



  // { path: 'article/:id', component: HeroDetailComponent },
  // { path: 'login', component: HeroesCompon'register', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
