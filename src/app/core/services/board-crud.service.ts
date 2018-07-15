import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from './config.service';
import { IBoard } from '../interfaces/board.interface';
import 'rxjs/add/operator/catch';

@Injectable()
export class BoardCrudService {
  boards: IBoard[] = [];
  errorMessage: string;
  loader = false;

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) {
  }

  execCreateBoard(name: string): void {
    this.loader = true;
    this.createBoard(name)
      .subscribe(
        res => {
          console.log('created -> ', res);
          this.execGetBoards();
        },
        error => this.errorMessage = <any>error
      );
  }

  execGetBoards(): void {
    this.loader = true;
    this.getBoards()
      .subscribe(
        res => {
          this.loader = false;
          this.boards = res;
        },
        error => this.errorMessage = <any>error
      );
  }

  execEditBoard(id: string, name: string): void {
    this.loader = true;
    this.editBoard(id, name)
      .subscribe(
        res => {
          console.log('edited -> ', res);
          this.execGetBoards();
        },
        error => this.errorMessage = <any>error
      );
  }

  execDeleteBoard(id: string): void {
    this.loader = true;
    this.deleteBoard(id)
      .subscribe(
        res => {
          console.log('deleted -> ', res);
          this.execGetBoards();
        },
        error => this.errorMessage = <any>error
      );
  }

  private createBoard(name: string): Observable<any> {
    const body = {
      name: name
    };
    return this.http.post(this.config.getAbsolutePath(this.config.routes.board.create), body)
      .catch(this.handleError);
  }

  private getBoards(): Observable<any> {
    return this.http.get(this.config.getAbsolutePath(this.config.routes.board.read))
      .catch(this.handleError);
  }

  private editBoard(id: string, name: string): Observable<any> {
    const body = {
      name: name
    };
    return this.http.put(this.config.getAbsolutePath(this.config.routes.board.edit(id)), body)
      .catch(this.handleError);
  }

  private deleteBoard(id: string) {
    return this.http.delete(this.config.getAbsolutePath(this.config.routes.board.delete(id)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log('board crud err: ', err);
    return Observable.throw(err.message);
  }

}
