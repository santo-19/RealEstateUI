import { TestBed } from '@angular/core/testing';

import { AlretifyService } from './alretify.service';

describe('AlretifyService', () => {
  let service: AlretifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlretifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
