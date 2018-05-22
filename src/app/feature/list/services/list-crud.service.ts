import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from '../../../core/services/config.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { IBoard } from '../../../core/interfaces/iboard.interface';

@Injectable()
export class ListCrudService {
  lists: IBoard[] = [];
  errorMessage: string;

  constructor(private http: HttpClient, private config: ConfigService) { }

  static handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getLists(id: number): Observable<IBoard> {
    return this.http.get(this.config.getAbsolutePath(this.config.routes.boardLists.read(id)))
      .map((res: any) => res.data)
      .catch(ListCrudService.handleError);
  }

  execGetLists(id: number): void {
    this.getLists(id)
      .subscribe(
        res => {
          // todo handle response
        },
        error => this.errorMessage = <any>error
      );
  }
}
