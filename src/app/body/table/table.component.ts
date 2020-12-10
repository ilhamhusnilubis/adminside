import { Component, OnInit } from '@angular/core';
declare const myTest: any;


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  name = 'Angular';

  constructor() { }

  ngOnInit(){
    myTest();
  }

}
