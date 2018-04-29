import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { BoardRootComponent } from './components/board-root/board-root.component';
import { BoardContentComponent } from './components/board-content/board-content.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    BoardRootComponent,
    BoardContentComponent
  ]
})
export class BoardModule {
}
