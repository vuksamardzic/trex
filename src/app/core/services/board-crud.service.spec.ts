import { TestBed, inject } from '@angular/core/testing';

import { BoardCrudService } from './board-crud.service';

describe('BoardCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardCrudService]
    });
  });

  it('should be created', inject([BoardCrudService], (service: BoardCrudService) => {
    expect(service).toBeTruthy();
  }));
});
