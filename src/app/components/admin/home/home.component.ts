import {Component, OnDestroy, OnInit} from '@angular/core';
import {HomeService} from '../../service/home.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Home} from './home.model';
import {error} from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  homes: Home[];
  message: string;
  inValid = false;

  constructor(
    protected homeService: HomeService,
    protected activatedRoute: ActivatedRoute,

    protected router: Router) {
  }

  ngOnInit() {
    this.loadAll();
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
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
        this.handleErrorResponse(error);
      });
  }

  protected onError(errorMessage: string) {
    console.log(errorMessage);
  }

  updateHome(id: number) {
    console.log('updateHome == ' + id);
  }
  deleteHome(
    id: number) {
    console.log('deleteHome == ' + id);
  }

  deleteProject($event: any) {
    console.log(',,');
  }

  // tslint:disable-next-line:no-shadowed-variable
  handleErrorResponse(error) {
    console.log(error);
    this.message = error.message;
    this.inValid = true;
  }
}
