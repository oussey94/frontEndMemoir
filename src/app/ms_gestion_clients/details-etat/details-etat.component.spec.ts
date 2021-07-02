import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEtatComponent } from './details-etat.component';

describe('DetailsEtatComponent', () => {
  let component: DetailsEtatComponent;
  let fixture: ComponentFixture<DetailsEtatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEtatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
