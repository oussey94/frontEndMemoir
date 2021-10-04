import { EtatsService } from 'src/app/services/gestion-client/etats.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Etat } from 'src/app/model/etat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-etat',
  templateUrl: './add-etat.component.html',
  styleUrls: ['./add-etat.component.css']
})
export class AddEtatComponent implements OnInit {

  newEtat = new Etat();
  etatForm : FormGroup;

  constructor(
    private etatsService : EtatsService, 
    private fb : FormBuilder, 
    private router: Router) { }

  ngOnInit(): void {

    this.etatForm = this.fb.group({
      nomEtat: ['', Validators.required]
    });
  }

  public ajouterEtat(): void {
    if(this.etatForm.valid){
      if(this.etatForm.dirty){
        const etat : Etat = {
          ...this.newEtat,
          ...this.etatForm.value
        };

        this.etatsService.addEtat(etat).subscribe({
          next: () => this.saveCompleted()
        });
      }
    }
  }

  public saveCompleted(): void {
    this.etatForm.reset();
    this.router.navigate(['/etats']);
  }

}
