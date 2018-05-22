import { TestBed, inject } from '@angular/core/testing';

import { ListResolveService } from './list-resolve.service';
import { ListCrudService } from './list-crud.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfigService } from '../../../core/services/config.service';

describe('ListResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConfigService, ListCrudService, ListResolveService]
    });
  });

  it('should be created', inject([ListResolveService], (service: ListResolveService) => {
    expect(service).toBeTruthy();
  }));
});
