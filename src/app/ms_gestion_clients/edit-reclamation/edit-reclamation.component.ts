import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from 'src/app/model/reclamation';
import { ReclamationsService } from 'src/app/services/gestion-client/reclamations.service';

@Component({
  selector: 'app-edit-reclamation',
  templateUrl: './edit-reclamation.component.html',
  styleUrls: ['./edit-reclamation.component.css']
})
export class EditReclamationComponent implements OnInit {

  public current_reclamation = new Reclamation();
  reclamationForm: FormGroup;
  errorMessage: string = "Probléme lors de la modification !!!";

  constructor(
    private reclamationService: ReclamationsService, 
    private activatedRoute: ActivatedRoute, 
    private fb: FormBuilder, 
    private router: Router) { }

  ngOnInit(): void {
    this.reclamationForm = this.fb.group({
      commentaire: ['', Validators.required]
    });

    this.reclamationService.getReclamationById(this.activatedRoute.snapshot.params.id).subscribe((reclamation: Reclamation) => {
      this.displayedReclamation(reclamation);
    });
  }

  updateUneReclamation(){
    if(this.reclamationForm.valid) {
      if(this.reclamationForm.dirty) {
        const reclamation: Reclamation = {
          ...this.current_reclamation,
          ...this.reclamationForm.value
        };

        this.reclamationService.updateReclamation(this.activatedRoute.snapshot.params.id, reclamation).subscribe({
          next: () => this.saveCompleted(),
          error: (err) => this.errorMessage = err
        });
      }
    }
    
  }

  public saveCompleted(): void {
    this.reclamationForm.reset();
    this.router.navigate(['/reclamations']);
  }

  public displayedReclamation(reclamation: Reclamation): void {
    this.current_reclamation = reclamation;

    this.reclamationForm.patchValue({
      commentaire : this.current_reclamation.commentaire
    });
  }

}
