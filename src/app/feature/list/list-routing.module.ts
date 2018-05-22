import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRootComponent } from './components/list-root/list-root.component';
import { ListResolveService } from './services/list-resolve.service';

const routes: Routes = [
  {
    path: 'lists',
    children: [
      {
        path: ':id',
        component: ListRootComponent,
        resolve: {
          data: ListResolveService
        }
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ListRoutingModule { }
