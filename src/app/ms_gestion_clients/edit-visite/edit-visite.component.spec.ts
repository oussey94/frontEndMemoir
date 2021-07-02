import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVisiteComponent } from './edit-visite.component';

describe('EditVisiteComponent', () => {
  let component: EditVisiteComponent;
  let fixture: ComponentFixture<EditVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVisiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
