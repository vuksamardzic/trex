import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { BoardRootComponent } from './components/board-root/board-root.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [BoardRootComponent]
})
export class BoardModule { }
