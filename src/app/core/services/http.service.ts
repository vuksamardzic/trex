import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {
  url: string = 'http://138.68.160.81/v1';
  constructor(private http: HttpClient) { }

  createBoard(name): Observable<any> {
    return this.http.post(`${this.url}/boards`, { name: name })
      .catch(this.handleError);
  }

  editBoard(id, name): Observable<Object> {
    return this.http.put(`${this.url}/boards/${id}`, { name: name })
    .catch(this.handleError);
  }

  getBoards(): Observable<any> {
    return this.http.get<any>(`${this.url}/boards`)
      .catch(this.handleError);
  }

  getBoard(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/boards/${id}`)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
