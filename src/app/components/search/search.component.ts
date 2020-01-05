import { Component, OnInit, Input } from '@angular/core';
import { Home } from '../admin/home/home.model';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    hideDestination: boolean = true;
    @Input() listhome:any[] = [];

    homes: Home[];
    constructor() { }

    ngOnInit() {
        console.log('search', this.listhome)
    }

    clickOpendes() {
        if (this.hideDestination) {
            this.hideDestination = false;
        } else {
            this.hideDestination = true;
        }
    }

}
