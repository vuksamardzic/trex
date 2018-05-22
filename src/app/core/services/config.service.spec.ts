import { TestBed, inject } from '@angular/core/testing';

import { ConfigService } from './config.service';

describe('ConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigService]
    });
  });

  it('should be created', inject([ConfigService], (service: ConfigService) => {
    expect(service).toBeTruthy();
  }));

  it('getAbsolutePath(str) should return string', inject(
    [ConfigService], (service: ConfigService) => {
      expect(service.getAbsolutePath('/boards/1')).toBe('http://localhost:8000/v1/boards/1');
    }
  ));
});
