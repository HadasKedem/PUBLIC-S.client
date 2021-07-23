import { Component, OnInit } from '@angular/core';
import { ArticlesService} from '../services/articles.service';
import {Article} from '../models/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: Article[] | [] = [];
  

  constructor(private articleService:ArticlesService) {
    this.articleService.getArticles()
    .subscribe(list => {
        this.articles = list;
        this.articles.forEach(x => console.log(x))
    });
    // articleService.messagesSubject.subscribe(articlesWeb => {
    //   this.articles = articlesWeb;
    // });
   }

  ngOnInit(): void {

    this.articleService
    .listenForNewItem()
    .subscribe((item: any) => {
      console.log( item)
       this.articles = [...this.articles, (item.value)];
      });
      this.articleService.getArticles()
  .subscribe(list => {
      this.articles = list;
      this.articles.forEach(x => console.log(x))
  });
  }
  
}
