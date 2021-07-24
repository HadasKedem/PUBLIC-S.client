import { Component, OnInit } from '@angular/core';
import { ArticlesService} from '../services/articles.service';
import {Article} from '../models/Article';

@Component({
  selector: 'app-new-article-page',
  templateUrl: './new-article-page.component.html',
  styleUrls: ['./new-article-page.component.css']
})
export class NewArticlePageComponent implements OnInit {
  selected = 'option2';
  fields = [ "Arts", "Opinions","Gossip", "Health", "Economics", "Science", "World", "Sports", "Tech", "Politics"]

  title: String ="";
  subTitle: String ="";
  content: String = "";
  writer: String ="";
  field: String="";
  imageUrl: String="";

  constructor(private articleService:ArticlesService) { }

  addArticle(){
    var newArticle = {
        title: this.title,
        subTitle :this.subTitle,
        content: this.content,
        writer: this.writer,
        field: this.field,
        imageUrl: this.imageUrl,
    }
    console.log(newArticle)
    var t = this.articleService.addArticle(newArticle);
    console.log(t)
}


  ngOnInit(): void {
  }

}
