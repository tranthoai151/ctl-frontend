import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  display = false ;
  selectedDateRange = null ;
  formLogin:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  showDialog() {
    this.display = true;
  }
}
