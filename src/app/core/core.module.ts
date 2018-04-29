import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ConfigService } from './services/config.service';
import { BoardCrudService } from './services/board-crud.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ConfigService,
    BoardCrudService
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class CoreModule {
}
