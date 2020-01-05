import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Home} from '../admin/home/home.model';
import {Observable} from 'rxjs';
import {createRequestOption} from '../util/request-util';

type EntityResponseType = HttpResponse<Home>;
type EntityArrayResponseType = HttpResponse<Home[]>;
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public resourceUrl = 'http://localhost:8080/api';

  constructor(protected http: HttpClient) { }

  query(req?: any): Observable<HttpResponse<Home[]>> {
    const options = createRequestOption(req);
    return this.http.get<Home[]>(this.resourceUrl + '/homes', { params: options, observe: 'response' });
  }

  search() {
    return this.http.get<Home[]>(`http://localhost:8080/api/homes`);
  }
}
