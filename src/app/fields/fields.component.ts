import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventEmitter, Input, Output} from '@angular/core'
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Article } from '../models/Article';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FieldsComponent implements OnInit {
  public fields: String[] = ["Politics","Tech","Sports","World","Science","Economics","Health","Gossip","Opinions","Arts"]

  searchQ!: String;
  // @Output() searchQChange = new EventEmitter();
  
  @Input() articles!: any[] ;
  @Output() articleChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

 

  public chooseField(e: MatTabChangeEvent){
    console.log(e.tab.textLabel)
    this.searchQ = e.tab.textLabel;
    // this.searchQChange.emit(this.searchQ);
  }
}
