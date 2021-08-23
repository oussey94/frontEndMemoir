import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmeDialogueUtilisateurComponent } from './confirme-dialogue-utilisateur.component';

describe('ConfirmeDialogueUtilisateurComponent', () => {
  let component: ConfirmeDialogueUtilisateurComponent;
  let fixture: ComponentFixture<ConfirmeDialogueUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmeDialogueUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmeDialogueUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
