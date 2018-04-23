import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../core/services/http.service';

@Component({
  selector: 't-board-root',
  templateUrl: './board-root.component.html',
  styleUrls: ['./board-root.component.scss']
})
export class BoardRootComponent implements OnInit {
  boards: any[] = [];
  board: Object = {};
  boardName: string = 'xem';
  errorMessage: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getBoards();
  }

  getBoards(): void {
    this.httpService.getBoards()
      .subscribe(data => {
        this.boards = data.data;
      },
        error => console.log(error)
      );
  }

  onBoardClick(id: number): void {
    this.httpService
      .getBoard(id)
      .subscribe(
        res => this.board = res.data,
        error => this.errorMessage = <any>error
      );
  }

  createBoard() {
    this.httpService.createBoard('vuk')
      .subscribe(res => {
        debugger;
      });
  }

  editBoard(id, name): void {
    this.httpService.editBoard(id, name)
      .subscribe(
        res => {
          this.board = res;
          this.getBoards();
        },
        error => this.errorMessage = <any>error
      );
  }

}
