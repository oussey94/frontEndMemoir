import { TestBed } from '@angular/core/testing';

import { BienEditGuard } from './bien-edit.guard';

describe('BienEditGuard', () => {
  let guard: BienEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BienEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
