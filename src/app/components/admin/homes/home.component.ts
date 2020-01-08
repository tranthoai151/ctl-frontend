import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Home} from './home.model';
import {error} from 'util';
import { AdminHomeService } from '../../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homes: any;
  message: string;
  inValid = false;

  constructor(
    protected adminHomeService: AdminHomeService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router) {
  }

  ngOnInit() {
    this.loadAll();
  }
  loadAll() {
    this.adminHomeService
      .search(0, 200).subscribe(
      response => {
        console.log('response', response.data);
        this.homes = response.data;
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
    this.router.navigate(['admin/homes', id]);
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
