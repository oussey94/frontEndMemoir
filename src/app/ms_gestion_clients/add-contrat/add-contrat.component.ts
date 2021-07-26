import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contrat } from 'src/app/model/contrat';
import { ContratsService } from 'src/app/services/contrats.service';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {
  public newContrat: Contrat;
  contratForm : FormGroup;

  constructor(
    private contratService : ContratsService, 
    private fb : FormBuilder, 
    private router : Router
    ) { }

  ngOnInit(): void {

    this.contratForm = this.fb.group({
      caution: ['', Validators.required],
      prixEffectif: ['', Validators.required],
      dateEffectif: ['', Validators.required],
      dureeEnNbreDeMois: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  public ajouterContrat(): void {
    if(this.contratForm.valid){
      if(this.contratForm.dirty){
        const contrat : Contrat = {
          ...this.newContrat,
          ...this.contratForm.value
        };

        this.contratService.addContrat(contrat).subscribe({
          next :() => this.saveCompleted()
        });
      }
    }
  }

  public saveCompleted(): void {
    this.contratForm.reset();
    this.router.navigate(['/contrats']);
  }

}
