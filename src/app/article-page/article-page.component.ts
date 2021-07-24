import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/Article';
import { ArticlesService } from '../services/articles.service';
import { first } from 'rxjs/operators';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  writer = "";
  currArticle: any | undefined;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticlesService,
    private userService: UsersService,

  ) {}

  ngOnInit(): void {
    this.getArticle();
  }

   async getArticle() {
    const _id = String(this.route.snapshot.paramMap.get('_id'));
     await this.articleService.getArticle(_id).subscribe(async articleObject => {
      if (articleObject) {
        this.currArticle = articleObject;
        // await this.articleService.getWriter(articleObject.)
        await this.userService.getUser(articleObject.writer).subscribe( user =>{
          this.writer = user.firstName + " " + user.lastName
          console.log("got to getUser")
        }

        )
      }
    });

    
  }
}
