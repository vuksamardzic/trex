import { Component, Input, OnInit } from '@angular/core';
import { BoardCrudService } from '../../../../core/services/board-crud.service';

@Component({
  selector: 't-board-content',
  templateUrl: './board-content.component.html',
  styleUrls: ['./board-content.component.scss']
})
export class BoardContentComponent implements OnInit {
  @Input() board;
  editing = false;

  constructor(private boardCrudService: BoardCrudService) {
  }

  ngOnInit(): void {
  }

  editBoard(): void {
    if (this.editing) {
      this.editing = false;
      this.boardCrudService.loader = true;
      this.boardCrudService.execEditBoard(this.board.id, this.board.name);
    }
  }

  checkEnterKeypress(ev: KeyboardEvent): void {
    if (ev.charCode === 13) {
      this.editing = false;
      this.boardCrudService.loader = true;
      this.boardCrudService.execEditBoard(this.board.id, this.board.name);
    }
  }

  deleteBoard(): void {
    this.boardCrudService.loader = true;
    this.boardCrudService.execDeleteBoard(this.board.id);
  }
}
