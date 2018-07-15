import { ICard } from './card.interface';

export interface IList {
  _id: string;
  name: string;
  cards: ICard[];
}
