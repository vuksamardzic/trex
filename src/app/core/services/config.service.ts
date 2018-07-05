import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  url = 'https://trex-api.herokuapp.com/api/v1';
  routes = {
    board: {
      create: '/board',
      read: '/board',
      edit: (id) => `/board/${id}`,
      delete: (id) => `/board/${id}`
    },
    boardLists: {
      create: (id) => `/board/${id}`,
      read: (id) => `/board/${id}`,
      edit: (id) => `/board/${id}`,
      delete: (id) => `/board/${id}`
    }
  };

  constructor() {
  }

  getAbsolutePath(route: string = ''): string {
    return this.url + route;
  }
}
