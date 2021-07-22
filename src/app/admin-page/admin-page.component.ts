import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import * as d3 from 'd3';
import { ArticlesService} from '../services/articles.service';



export interface UserData {
  id: string;
  name: string;
  email: String;
  writer: boolean;
  admin: boolean;
}

/** Constants used to fill up our data base. */
// const FRUITS: string[] = [
//   'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
// ];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  private data = [
    {"_id": "none", "count": "1"}
  ];
  private svg: any;
  private margin = 20;
  private width = 300;
  private height = 300;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors: any;
 

  constructor(private articleService:ArticlesService) {

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.users);
  }
  private createSvg(): void {
    this.svg = d3.select("figure#pie")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
}

private createColors(): void {
  this.colors = d3.scaleOrdinal()
  .domain(this.data.map(d => d.count.toString()))
  .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
}


private drawChart(): void {
  // Compute the position of each group on the pie:
  const pie = d3.pie<any>().value((d: any) => Number(d.count));

  // Build the pie chart
  this.svg
  .selectAll('pieces')
  .data(pie(this.data))
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(this.radius)
  )
  .attr('fill', (d: any, i: any) => (this.colors(i)))
  .attr("stroke", "#121926")
  .style("stroke-width", "1px");

  // Add labels
  const labelLocation = d3.arc()
  .innerRadius(50)
  .outerRadius(this.radius);

  this.svg
  .selectAll('pieces')
  .data(pie(this.data))
  .enter()
  .append('text')
  .text((d: { data: { _id: any; }; }) => d.data._id)
  .attr("transform", (d: d3.DefaultArcObject) => "translate(" + labelLocation.centroid(d) + ")")
  .style("text-anchor", "middle")
  .style("font-size", 15);
}

   async ngOnInit() {
   await this.articleService.getArticlesByField().subscribe(articleObject => {
      if (articleObject) {
        console.log(articleObject)
        this.data = articleObject;
        // await this.articleService.getWriter(articleObject.)
        this.createSvg();
        this.createColors();
        this.drawChart();
      };
  })
 
}

  displayedColumns: string[] = ['id', 'name', 'email','writer', 'admin', 'delete'];
  dataSource: MatTableDataSource<UserData>;


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  private users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));


  onClickedDelete(id: string){
    for(let i = 0; i < this.users.length; ++i){
      if (this.users[i].id === id) {
          this.users.splice(i,1);
      }
  }
  this.dataSource = new MatTableDataSource(this.users);   
  this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onClickedAdmin(){

  }
  
  onClickedWriter(){

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


 
}



/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    email: 'user@gmail.com',
    writer: false,
    admin: false
  };
}
