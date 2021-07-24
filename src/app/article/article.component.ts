import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticlesService} from '../services/articles.service';
import {Article} from '../models/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // @input articles: Article[] | [] = [];
  @Input() articles: Article[] = [] ;
  @Output() articleChange = new EventEmitter();

  constructor(private articleService:ArticlesService) {
    // this.articleService.getArticles()
    // .subscribe(list => {
    //     this.articles = list;
    //     this.articles.forEach(x => console.log(x))
    //     this.articleChange.emit(this.articles);

    // });
    // articleService.messagesSubject.subscribe(articlesWeb => {
    //   this.articles = articlesWeb;
    // });
   }

  ngOnInit(): void {

  //   this.articleService
  //   .listenForNewItem()
  //   .subscribe((item: any) => {
  //     console.log( item)
  //      this.articles = [...this.articles, (item.value)];
  //      this.articleChange.emit(this.articles);
  //     });

  //     this.articleService.getArticles()
  // .subscribe(list => {
  //     this.articles = list;
  //     this.articles.forEach(x => console.log(x))
  //     this.articleChange.emit(this.articles);

  // });
  }
  
}
