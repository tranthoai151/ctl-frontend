import { Component, OnInit, Input } from '@angular/core';
import { Home } from '../admin/home/home.model';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    hideDestination: boolean = true;
    hideGuests:boolean = true;
    @Input() listhome: Home[];

    homes: Home[];
    constructor() { }
    counterValueAdults:number = 0;
    counterValueChildren:number = 0;
    counterValueInfants:number = 0;

    ngOnInit() {
        console.log('search', this.listhome);
    }

    clickOpendes() {
        if (this.hideDestination) {
            this.hideDestination = false;
        } else {
            this.hideDestination = true;
        }
    }
    clickGuests() {
        if (this.hideGuests) {
            this.hideGuests = false;
        } else {
            this.hideGuests = true;
        }
    }
    incrementAdults(){
        this.counterValueAdults++;
    }
    decrementAdults(){
        this.counterValueAdults--;
    }
    incrementChildren(){
        this.counterValueChildren++;
    }
    decrementChildren(){
        this.counterValueChildren--;
    }
    incrementInfants(){
        this.counterValueInfants++;
    }
    decrementInfants(){
        this.counterValueInfants--;
    }

}
