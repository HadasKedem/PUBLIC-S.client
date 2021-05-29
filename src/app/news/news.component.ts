import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  updates = [
    { title: 'corona', content: 'is over' },
    { title: 'bibi', content: 'is no longer the head on minister' },
    { title: 'climate', content: 'is important' },
    { title: 'hadas', content: 'is the queen of the world' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
