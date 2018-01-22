import { Component } from '@angular/core';
import { DataService } from './common/services/data.service';

@Component({
  selector: 'trex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public data: DataService) {}
}
