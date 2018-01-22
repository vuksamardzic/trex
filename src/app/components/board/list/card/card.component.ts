import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trex-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  title = 'card :)';

  constructor() { }

  ngOnInit() {
  }

}
