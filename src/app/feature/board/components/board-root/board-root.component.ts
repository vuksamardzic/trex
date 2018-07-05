import { Component, OnInit } from '@angular/core';
import { BoardCrudService } from '../../../../core/services/board-crud.service';

@Component({
  selector: 't-board-root',
  templateUrl: './board-root.component.html',
  styleUrls: [ './board-root.component.scss' ]
})
export class BoardRootComponent implements OnInit {
  showBoardFrom = false;

  constructor(public boardCrudService: BoardCrudService) {
  }

  ngOnInit() {
    this.boardCrudService.execGetBoards();
  }


  toggleBoardForm(): void {
    this.showBoardFrom = !this.showBoardFrom;
  }

  submitBoardForm(form: HTMLFormElement): void {
    if (form.value[ 'board-name' ]) {
      this.boardCrudService.execCreateBoard(form.value[ 'board-name' ]);
      form.reset();
    }
  }
}
