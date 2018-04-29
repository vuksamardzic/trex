import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BoardCrudService } from '../../../../core/services/board-crud.service';

@Component({
  selector: 't-board-root',
  templateUrl: './board-root.component.html',
  styleUrls: ['./board-root.component.scss']
})
export class BoardRootComponent implements OnInit {
  showBoardFrom = false;

  constructor(public boardCrudService: BoardCrudService) {
  }

  ngOnInit() {
    this.boardCrudService.execGetBoards();
  }

  createBoard(name): void {
    if (name) {
      this.boardCrudService.execCreateBoard(name);
    }
  }

  toggleBoardForm(): void {
    this.showBoardFrom = !this.showBoardFrom;
  }

  submitBoardForm(form: NgForm): void {
    this.boardCrudService.loader = true;
    this.createBoard(form.value['board-name']);
    form.controls['board-name'].setValue('');
  }
}
