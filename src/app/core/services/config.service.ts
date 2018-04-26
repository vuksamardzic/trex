import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  url: string = 'http://localhost:8000/v1';
  routes = {
    createBoard: '/boards',
    getBoards: '/boards',
    editBoard: '/boards',
    deleteBoard: '/boards'
  }
  constructor() { }

  getAbsolutePath(route: string = ''): string {
    return this.url + route;
  }
}
