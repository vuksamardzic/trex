import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ListCrudService } from './list-crud.service';

@Injectable()
export class ListResolveService implements Resolve<any> {

  constructor(private listCrudService: ListCrudService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = +route.paramMap.get('id');
    return this.listCrudService.getLists(id);
  }

}
