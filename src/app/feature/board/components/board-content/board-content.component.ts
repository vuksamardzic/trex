import { Component, Input, OnInit } from '@angular/core';
import { BoardCrudService } from '../../../../core/services/board-crud.service';
import { Router } from '@angular/router';
import { IBoard } from '../../../../core/interfaces/iboard.interface';

@Component({
  selector: 't-board-content',
  templateUrl: './board-content.component.html',
  styleUrls: [ './board-content.component.scss' ]
})
export class BoardContentComponent implements OnInit {
  @Input() board: IBoard;
  editing = false;

  constructor(private boardCrudService: BoardCrudService, private router: Router) { }

  ngOnInit(): void { }

  editBoard(): void {
    if (this.editing) {
      this.editing = false;
      this.boardCrudService.execEditBoard(this.board.id, this.board.name);
    }
  }

  checkEnterKeypress(ev: KeyboardEvent): void {
    if (ev.charCode === 13) {
      this.editing = false;
      this.boardCrudService.execEditBoard(this.board.id, this.board.name);
    }
  }

  navigateToBoard(): void {
    this.router.navigate([ '/lists', this.board.id ])
      .catch((err) => {
        console.log(err);
      });
  }

  deleteBoard(): void {
    this.boardCrudService.execDeleteBoard(this.board.id);
  }
}
