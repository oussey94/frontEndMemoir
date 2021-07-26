import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesBiensImmobilliersComponent } from './les-biens-immobilliers.component';

describe('LesBiensImmobilliersComponent', () => {
  let component: LesBiensImmobilliersComponent;
  let fixture: ComponentFixture<LesBiensImmobilliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesBiensImmobilliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesBiensImmobilliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
