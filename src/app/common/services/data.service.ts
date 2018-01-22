import { Injectable } from '@angular/core';
import { BoardI } from '../interfaces/board.interface';

@Injectable()
export class DataService {
  arr: BoardI[] = [];
}
