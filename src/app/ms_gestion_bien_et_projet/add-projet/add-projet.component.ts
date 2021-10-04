import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Projet } from 'src/app/model/projet';
import { ProjetService } from 'src/app/services/gestion-bien-et-projet/projet.service';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {

  public newProjet = new Projet();
  projetForm : FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private projetService: ProjetService
  ) { }

  ngOnInit(): void {

    this.projetForm = this.fb.group({
      nomProjet: ['', Validators.required],
      localisation: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  public ajouterProjet(): void {
    if(this.projetForm.valid){
      if(this.projetForm.dirty){
        const projet: Projet = {
          ...this.newProjet,
          ...this.projetForm.value
        };

        this.projetService.addProjet(projet).subscribe({
          next: () => this.saveCompleted()
        });
      }
    }
  }

  public saveCompleted(): void {
    this.projetForm.reset();
    this.router.navigate(['/projets']);
  }

}
