import { TestBed } from '@angular/core/testing';

import { PhysiciansService } from './physicians.service';

describe('PhysiciansService', () => {
  let service: PhysiciansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhysiciansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
