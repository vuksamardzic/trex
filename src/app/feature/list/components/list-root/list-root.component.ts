import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBoard } from '../../../../core/interfaces/board.interface';
import { ListCrudService } from '../../services/list-crud.service';
import { BoardCrudService } from '../../../../core/services/board-crud.service';

@Component({
  selector: 't-list-root',
  templateUrl: './list-root.component.html',
  styleUrls: ['./list-root.component.scss']
})
export class ListRootComponent implements OnInit {
  board: IBoard;
  showListForm: boolean;

  constructor(
    private route: ActivatedRoute,
    private boardCrudService: BoardCrudService,
    private listCrudService: ListCrudService
  ) {
  }

  ngOnInit() {
    this.board = this.route.snapshot.data['data'];
  }

  onListSubmit(form: HTMLFormElement): void {
    if (form.value.name) {
      const body = {
        name: form.value.name,
        board_id: this.board._id
      };
      this.listCrudService.createList(this.board._id, body)
        .subscribe(
          res => {
            form.reset();
            this.refreshBoardData();
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  onCardSubmit(form: HTMLFormElement, list_id): void {
    if (form.value.name) {
      const body = {
        name: form.value.name,
        list_id: list_id,
        board_id: this.board._id
      };
      this.listCrudService.createCard(list_id, body)
        .subscribe(
          res => {
            form.reset();
            this.refreshBoardData();
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  refreshBoardData(): void {
    this.listCrudService.getLists(this.board._id)
      .subscribe(
        res => {
          this.board = res;
        },
        err => {
          console.log(err);
        }
      );
  }

}
