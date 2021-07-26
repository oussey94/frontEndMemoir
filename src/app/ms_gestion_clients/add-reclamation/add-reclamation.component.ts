import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/model/reclamation';
import { ReclamationsService } from 'src/app/services/reclamations.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {

  newReclamation = new Reclamation();
  reclamationForm : FormGroup;
  //errorMessage: string = "Probléme lors de l'ajout !!!";

  constructor(
    private reclamationService : ReclamationsService, 
    private router : Router, 
    private fb : FormBuilder
    ) { }

  ngOnInit(): void {
    this.reclamationForm = this.fb.group({
      commentaire: ['', Validators.required]
    });
  }

  public ajouterReclamation(): void {
    if(this.reclamationForm.valid){
      if (this.reclamationForm.dirty){
        const reclamation : Reclamation = {
          ...this.reclamationForm,
          ...this.reclamationForm.value
        };

        //console.log("valeurs:", JSON.stringify(this.reclamationForm.value));;

        this.reclamationService.addReclamation(reclamation).subscribe({
          next: () => this.saveCompleted()
          //error: (err) => this.errorMessage = err
        });
      }
    }
  }

  public saveCompleted(): void {
    this.reclamationForm.reset();
    this.router.navigate(['/reclamations']);
  }

}
