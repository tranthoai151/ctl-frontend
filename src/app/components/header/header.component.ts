import { Component, OnInit } from '@angular/core';
import 'react-dates/lib/css/_datepicker.css';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  display = false ;
  selectedDateRange = null ;
  constructor() { }

  ngOnInit() {
  }
  showDialog() {
    this.display = true;
  }
}
