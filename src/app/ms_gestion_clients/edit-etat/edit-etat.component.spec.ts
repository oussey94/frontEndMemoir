import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEtatComponent } from './edit-etat.component';

describe('EditEtatComponent', () => {
  let component: EditEtatComponent;
  let fixture: ComponentFixture<EditEtatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEtatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
