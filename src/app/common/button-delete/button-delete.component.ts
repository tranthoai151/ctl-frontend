import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-delete',
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.scss']
})
export class ButtonDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickButtonDelete(entity: any) {
    console.log('clickButtonDelete', entity);
  }
}
