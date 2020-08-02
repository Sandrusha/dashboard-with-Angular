import { TestBed } from '@angular/core/testing';

import { MainTabService } from './main-tab.service';

describe('MainTabService', () => {
  let service: MainTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
