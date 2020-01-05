import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/client/home.service';
import { ActivatedRoute } from '@angular/router';
import { Home } from '../admin/home/home.model';

@Component({
    selector: 'app-homes',
    templateUrl: './homes.component.html',
    styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {
    homes: Home[];



    constructor(
        protected homeService: HomeService,
        protected activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.loadAll();
    }

    loadAll() {
        this.homeService
            .search().subscribe(
                response => {
                    console.log('response', response);
                    this.homes = response;
                },
                // tslint:disable-next-line:no-shadowed-variable
                error => {
                    console.log('err', error);
                });
    }

    

}
