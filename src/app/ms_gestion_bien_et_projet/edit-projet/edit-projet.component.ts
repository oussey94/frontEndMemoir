import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'src/app/model/projet';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-edit-projet',
  templateUrl: './edit-projet.component.html',
  styleUrls: ['./edit-projet.component.css']
})
export class EditProjetComponent implements OnInit {

  public projetForm: FormGroup;
  public currentProjet = new Projet();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private projetService : ProjetService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.projetForm = this.fb.group({
      nomProjet: ['', Validators.required],
      localisation: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.projetService.getProjetById(this.activatedRoute.snapshot.params.id).subscribe((projet: Projet) => {
      this.afficher(projet);
    });
  }

  public updateDuProjet(): void {
    if(this.projetForm.valid){
      if(this.projetForm.dirty){
        const projet : Projet = {
          ...this.currentProjet,
          ...this.projetForm.value
        };

        this.projetService.updateProjet(this.activatedRoute.snapshot.params.id, projet).subscribe({
          next: () => this.saveCompleted()
        });
      }
    }
  }

  public saveCompleted(): void{
    this.projetForm.reset();
    this.router.navigate(['/projets']);
  }

  public afficher(projet : Projet): void {
    this.currentProjet = projet;

    this.projetForm.patchValue({
      nomProjet: this.currentProjet.nomProjet,
      localisation: this.currentProjet.localisation,
      description: this.currentProjet.description
    });
  }

}
