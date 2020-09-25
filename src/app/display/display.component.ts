import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   customer_details:{id:number,name:string}[]=[
     {id:1,name:"Cyber"},
     {id:2,name:"Witch"},
     {id:3,name:"Wizard"}
   ]
}