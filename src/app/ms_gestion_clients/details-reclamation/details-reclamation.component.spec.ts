import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReclamationComponent } from './details-reclamation.component';

describe('DetailsReclamationComponent', () => {
  let component: DetailsReclamationComponent;
  let fixture: ComponentFixture<DetailsReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsReclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
