import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from './config.service';
import { IBoard } from '../interfaces/iboard.interface';
import 'rxjs/add/operator/catch';

@Injectable()
export class BoardCrudService {
  boards: IBoard[] = [];
  errorMessage: string;
  loader = false;

  constructor(private http: HttpClient, private config: ConfigService) {
  }

  static handleError(err: HttpErrorResponse) {
    return Observable.throw(err.message);
  }

  createBoard(name: string): Observable<any> {
    return this.http.post(this.config.getAbsolutePath(this.config.routes.boards.create), {name: name})
      .catch(BoardCrudService.handleError);
  }

  execCreateBoard(name: string): void {
    this.createBoard(name)
      .subscribe(
        res => {
          console.log('created -> ', res);
          this.execGetBoards();
        },
        error => this.errorMessage = <any>error
      );
  }

  getBoards(): Observable<any> {
    return this.http.get(this.config.getAbsolutePath(this.config.routes.boards.read))
      .catch(BoardCrudService.handleError);
  }

  execGetBoards(): void {
    this.getBoards()
      .subscribe(
        res => {
          this.loader = false;
          this.boards = res.data;
        },
        error => this.errorMessage = <any>error
      );
  }

  editBoard(id: number, name: string): Observable<any> {
    return this.http.put(this.config.getAbsolutePath(this.config.routes.boards.edit(id)), {name: name})
      .catch(BoardCrudService.handleError);
  }

  execEditBoard(id: number, name: string): void {
    this.editBoard(id, name)
      .subscribe(
        res => {
          console.log('edited -> ', res);
          this.execGetBoards();
        },
        error => this.errorMessage = <any>error
      );
  }

  deleteBoard(id: number) {
    return this.http.delete(this.config.getAbsolutePath(this.config.routes.boards.delete(id)))
      .catch(BoardCrudService.handleError);
  }

  execDeleteBoard(id: number): void {
    this.deleteBoard(id)
      .subscribe(
        res => {
          console.log('deleted -> ', res);
          this.execGetBoards();
        },
        error => this.errorMessage = <any>error
      );
  }
}
