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
    list: {
      create: (id) => `/list/${id}`,
      read: (id) => `/list/${id}`,
      edit: (id) => `/list/${id}`,
      delete: (id) => `/list/${id}`
    },
    card: {
      create: (id) => `/card/${id}`,
      edit: (id) => `/card/${id}`,
      delete: (id) => `/card/${id}`
    }
  };

  constructor() {
  }

  getAbsolutePath(route: string = ''): string {
    return this.url + route;
  }
}
