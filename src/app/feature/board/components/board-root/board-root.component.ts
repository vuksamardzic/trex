import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../../../core/services/http.service';

@Component({
  selector: 't-board-root',
  templateUrl: './board-root.component.html',
  styleUrls: ['./board-root.component.scss']
})
export class BoardRootComponent implements OnInit {
  boards: any[] = [];
  errorMessage: string;
  showBoardFrom: boolean = true;
  boardName: string = '';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getBoards();
  }

  getBoards(): void {
    this.httpService.getBoards()
      .subscribe(data => {
        this.boards = data.data;
      },
        error => this.errorMessage = <any>error
      );
  }

  onBoardClick(id: number): void {
    this.httpService
      .getBoard(id)
      .subscribe(
        res => {
          console.log(res);
        },
        error => this.errorMessage = <any>error
      );
  }

  createBoard(name) {
    this.httpService.createBoard(name)
      .subscribe(res => {
        this.getBoards();
        console.log('done', res);
      },
        error => this.errorMessage = <any>error
      );
  }

  editBoard(id, name): void {
    this.httpService.editBoard(id, name)
      .subscribe(
        res => {
          this.getBoards();
        },
        error => this.errorMessage = <any>error
      );
  }

  toggleBoardForm(): void {
    this.showBoardFrom = !this.showBoardFrom;
  }

  submitBoardForm(form: NgForm): void {
    this.createBoard(form.value.boardName);
    form.controls['boardName'].setValue('');
  }

}
