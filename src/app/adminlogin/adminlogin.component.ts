import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
declare const mySignin: any;

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  name = 'Angular';
  constructor(private route : Router) { }

  ngOnInit(){
    mySignin();
   }

}
