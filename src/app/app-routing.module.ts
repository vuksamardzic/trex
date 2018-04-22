import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardRootComponent } from './feature/board/components/board-root/board-root.component';

const routes: Routes = [
  { path: 'home', component: BoardRootComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: BoardRootComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
