import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBoard } from '../../../../core/interfaces/iboard.interface';

@Component({
  selector: 't-list-root',
  templateUrl: './list-root.component.html',
  styleUrls: [ './list-root.component.scss' ]
})
export class ListRootComponent implements OnInit {
  board: IBoard;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.board = this.route.snapshot.data['data'];
  }

}
