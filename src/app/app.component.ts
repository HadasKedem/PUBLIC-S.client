import { Component } from '@angular/core';
import { ArticlesService } from './services/articles.service'
import { BreakingNewsService } from './services/breaking-news.service';
// import {  PieChartComponent } from 'angular-d3-charts';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ArticlesService
  ]
})
export class AppComponent {
  title = 'Public.s';
  
}
