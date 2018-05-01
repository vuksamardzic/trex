import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardRootComponent } from './feature/board/components/board-root/board-root.component';

const routes: Routes = [
  { path: 'home', component: BoardRootComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: BoardRootComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
