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
   }

  ngOnInit(): void {
  }

}
