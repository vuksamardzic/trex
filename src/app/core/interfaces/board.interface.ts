import { IList } from './list.interface';

export interface IBoard {
  _id: string;
  name: string;
  lists: IList[];
}
