import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Home} from '../admin/home/home.model';
import {Observable} from 'rxjs';


type EntityResponseType = HttpResponse<Home>;
type EntityArrayResponseType = HttpResponse<Home[]>;
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public resourceUrl = 'http://localhost:8080/api';

  constructor(protected http: HttpClient) { }



  search() {
    return this.http.get<Home[]>(`http://localhost:8080/api/admin/homes`);
  }
}
