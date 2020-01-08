import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Home } from '../home.model';
import { AdminHomeService } from 'src/app/components/service/home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {
  id: number;
  home: Home;

  constructor(
    private adminHomeService: AdminHomeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log('HomeDetailComponent', this.id);
    this.getHomeById(this.id);
  }

  getHomeById(id) {
    this.adminHomeService.getHomeById(id).subscribe(
      response => {
        this.home = response;
      },
      error =>  {
        console.log('err');
      }
    );
  }
}
