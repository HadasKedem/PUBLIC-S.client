import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-article-page',
  templateUrl: './new-article-page.component.html',
  styleUrls: ['./new-article-page.component.css']
})
export class NewArticlePageComponent implements OnInit {
  selected = 'option2';

  constructor() { }

  ngOnInit(): void {
  }

}
