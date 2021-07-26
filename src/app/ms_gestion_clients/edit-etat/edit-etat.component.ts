import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etat } from 'src/app/model/etat';
import { EtatsService } from 'src/app/services/etats.service';

@Component({
  selector: 'app-edit-etat',
  templateUrl: './edit-etat.component.html',
  styleUrls: ['./edit-etat.component.css']
})
export class EditEtatComponent implements OnInit {
  public current_etat = new Etat();
  etatForm : FormGroup;
  errorMessage: string = "Probléme lors de la modification !!!";

  constructor(
    private etatService: EtatsService, 
    private activatedRoute: ActivatedRoute, 
    private fb: FormBuilder, 
    private router: Router) { }

  ngOnInit(): void {
    this.etatForm = this.fb.group({
      nomEtat: ['', Validators.required]
    });
    
    this.etatService.getEtatById(this.activatedRoute.snapshot.params.id).subscribe((etat: Etat) => {
      this.displayEtat(etat);
    });
  }

  public updateUnEtat(): void {
    if(this.etatForm.valid) {
      if(this.etatForm.dirty) {
        const etat: Etat = {
          ...this.current_etat,
          ...this.etatForm.value
        };
        this.etatService.updateEtat(this.activatedRoute.snapshot.params.id, etat).subscribe({
          next: () => this.saveCompleted(),
          error: (err) => this.errorMessage = err
        });
      }
    }
    
  }

  public saveCompleted(): void {
    this.etatForm.reset();
    this.router.navigate(['/etats']);
  }

  displayEtat(etat: Etat): void {
    this.current_etat = etat;
    this.etatForm.patchValue({
      nomEtat: this.current_etat.nomEtat
    });
  }

}
