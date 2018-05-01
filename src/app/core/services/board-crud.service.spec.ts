import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BoardCrudService } from './board-crud.service';
import { ConfigService } from './config.service';

describe('BoardCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardCrudService, ConfigService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([BoardCrudService], (service: BoardCrudService) => {
    expect(service).toBeTruthy();
  }));
});
