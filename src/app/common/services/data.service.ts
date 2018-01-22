import { Injectable } from '@angular/core';
import { TrexArrayI } from '../interfaces/trex-array.interface';

@Injectable()
export class DataService {
  arr: TrexArrayI[] = [];
}
