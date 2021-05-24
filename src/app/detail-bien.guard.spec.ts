import { TestBed } from '@angular/core/testing';

import { DetailBienGuard } from './detail-bien.guard';

describe('DetailBienGuard', () => {
  let guard: DetailBienGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DetailBienGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
