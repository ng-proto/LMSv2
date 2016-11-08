import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  heroes = [];
  className = "topnav";
  constructor() {

  }

  ngOnInit() {
    this.heroes = [
      {
        name : 'Dashboard',
        link : '/dashboard'
      },
      {
        name : 'My Leave',
        link : '/myLeave'
      },
      {
        name : 'Bar Chart',
        link : '/barChart'
      }
    ]
  }
  toggle(event:any){
    if(this.className == "topnav"){
      this.className = "topnav responsive"
    }else{
      this.className = "topnav"
    }
  }

}
