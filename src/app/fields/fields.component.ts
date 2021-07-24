import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventEmitter, Input, Output} from '@angular/core'
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Article } from '../models/Article';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FieldsComponent implements OnInit {
  public fields: String[] = ["Politics","Tech","Sports","World","Science","Economics","Health","Gossip","Opinions","Arts"]
  searchGen: String ="";
  searchQ!: String;
  // @Output() searchQChange = new EventEmitter();
  
  @Input() articles!: any[] ;
  @Output() articleChange = new EventEmitter();
  constructor(private articleService:ArticlesService) { }

  ngOnInit(): void {
  }

  public onClickedSearch(){
    console.log(this.searchGen)
    this.search(this.searchGen)
  }

  public chooseField(e: MatTabChangeEvent){
    this.searchQ = e.tab.textLabel;
    console.log(this.searchQ)
    // this.articleService.getArticlesField(`{"field": "${this.searchQ}"}`).subscribe(list => {
      this.search(this.searchQ)
  }

  public search(q : String){
 this.articleService.getArticlesField(q).subscribe(list => {
      this.articles = list;
          console.log(list)
          this.articles.forEach(x => console.log(x))
          this.articleChange.emit(this.articles);
          
    })

  }
}
