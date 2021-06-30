import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  showInput = false;
  onClickedSearch(){
    this.showInput = !this.showInput;
  }
  constructor() { }

  ngOnInit(): void {
  }


}
