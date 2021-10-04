import { TestBed } from '@angular/core/testing';

import { BienImmobillierService } from './bien-immobillier.service';

describe('BienImmobillierService', () => {
  let service: BienImmobillierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BienImmobillierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
