import { inject, TestBed } from '@angular/core/testing';

import { ListCrudService } from './list-crud.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfigService } from '../../../core/services/config.service';

describe('ListCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ ConfigService, ListCrudService ]
    });
  });

  it('should be created', inject([ ListCrudService ], (service: ListCrudService) => {
    expect(service).toBeTruthy();
  }));
});
