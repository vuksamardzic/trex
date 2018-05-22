import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ListRootComponent } from './components/list-root/list-root.component';
import { ListRoutingModule } from './list-routing.module';
import { ListCrudService } from './services/list-crud.service';
import { ListResolveService } from './services/list-resolve.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ListRoutingModule
  ],
  declarations: [
    ListRootComponent
  ],
  providers: [
    ListCrudService,
    ListResolveService
  ],
  exports: [
    ListRootComponent
  ]
})
export class ListModule { }
