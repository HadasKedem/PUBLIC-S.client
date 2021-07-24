import { Component, OnInit } from '@angular/core';
import { Article } from '../models/Article';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  searchQ: String = "";

  articles: any[] = [];
  

  constructor(private articleService:ArticlesService) {
    this.articleService.getArticlesByPage(0)
    .subscribe(list => {
        this.articles = list;
        this.articles.forEach(x => console.log(x))
    });
    
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
