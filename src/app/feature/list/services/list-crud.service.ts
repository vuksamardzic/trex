import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from '../../../core/services/config.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { IBoard } from '../../../core/interfaces/board.interface';

@Injectable()
export class ListCrudService {
  lists: IBoard[] = [];

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) {
  }

  createList(id: string, body: any): Observable<IBoard> {
    return this.http.post(this.config.getAbsolutePath(this.config.routes.list.create(id)), body)
      .catch(this.handleError);
  }

  createCard(id: string, body: any): Observable<IBoard> {
    return this.http.post(this.config.getAbsolutePath(this.config.routes.card.create(id)), body)
      .catch(this.handleError);
  }

  getLists(id: string): Observable<IBoard> {
    return this.http.get(this.config.getAbsolutePath(this.config.routes.list.read(id)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
