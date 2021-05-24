import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBienComponent } from './detail-bien.component';

describe('DetailBienComponent', () => {
  let component: DetailBienComponent;
  let fixture: ComponentFixture<DetailBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
