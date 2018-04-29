import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  url = 'http://localhost:8000/v1';
  routes = {
    boards: {
      create: '/boards',
      read: '/boards',
      edit: (id) => `/boards/${id}`,
      delete: (id) => `/boards/${id}`
    }
  };

  constructor() {
  }

  getAbsolutePath(route: string = ''): string {
    return this.url + route;
  }
}
