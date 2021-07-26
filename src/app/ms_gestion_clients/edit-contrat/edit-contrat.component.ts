import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/model/contrat';
import { ContratsService } from 'src/app/services/contrats.service';

@Component({
  selector: 'app-edit-contrat',
  templateUrl: './edit-contrat.component.html',
  styleUrls: ['./edit-contrat.component.css']
})
export class EditContratComponent implements OnInit {
  public current_contrat = new Contrat();
  contratForm : FormGroup;
  errorMessage: string = "Probléme lors de la modification !!!";

  constructor(
    private contractService : ContratsService, 
    private fb : FormBuilder, 
    private activatedRoute : ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {
    const pipe = new DatePipe('en-US');
    this.contratForm = this.fb.group({
      caution: ['', Validators.required],
      prixEffectif: ['', Validators.required],
      dateEffectif: [pipe.transform(this.current_contrat.dateEffectif, 'MM/dd/yyyy'), Validators.required],
      dureeEnNbreDeMois: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.contractService.getContratById(this.activatedRoute.snapshot.params.id).subscribe((contrat: Contrat) => {
      this.displayContrat(contrat);
    });
  }

  public updateUnContrat(): void {
    if(this.contratForm.valid) {
      if(this.contratForm.dirty) {
        const contrat: Contrat = {
          ...this.current_contrat,
          ...this.contratForm.value
        };

        this.contractService.updateContrat(this.activatedRoute.snapshot.params.id, contrat).subscribe({
          next: () => this.saveCompleted(),
          error: (err) => this.errorMessage = err
        });
      }
    }
    
  }

  public saveCompleted(): void {
    this.contratForm.reset();
    this.router.navigate(['/contrats']);
  }

  public displayContrat(contrat: Contrat): void {
    this.current_contrat = contrat;

    this.contratForm.patchValue({
      caution: this.current_contrat.caution,
      prixEffectif: this.current_contrat.prixEffectif,
      dateEffectif: this.current_contrat.dateEffectif,
      dureeEnNbreDeMois: this.current_contrat.dureeEnNbreDeMois,
      description: this.current_contrat.description
    });
  }

}
