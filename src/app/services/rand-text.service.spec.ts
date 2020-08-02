import { TestBed } from '@angular/core/testing';

import { RandTextService } from './rand-text.service';

describe('RandTextService', () => {
  let service: RandTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
