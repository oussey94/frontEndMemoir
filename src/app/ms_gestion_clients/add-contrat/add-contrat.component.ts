import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contrat } from 'src/app/model/contrat';
import { BienService } from 'src/app/services/gestion-bien-et-projet/bien.service';
import { ClientService } from 'src/app/services/gestion-utilisateur/client.service';
import { ContratsService } from 'src/app/services/gestion-client/contrats.service';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {
  public newContrat = new Contrat();
  contratForm : FormGroup;
  public clients: any;
  public biens: any;

  constructor(
    private contratService : ContratsService,
    private clientService: ClientService,
    private bienService: BienService,
    private fb : FormBuilder, 
    private router : Router
    ) { }

  ngOnInit(): void {

    this.contratForm = this.fb.group({
      caution: ['', Validators.required],
      prixEffectif: ['', Validators.required],
      dateEffectif: ['', Validators.required],
      dureeEnNbrDeMois: ['', Validators.required],
      description: ['', Validators.required],
      client: ['', Validators.required],
      bien: ['', Validators.required],
      clientID: ['', Validators.required],
      bienImmobiliereID: ['', Validators.required]
    });

    this.clientService.getAllClients().subscribe(data => {
      console.log("amy11: ",data);
      this.clients = data;
    });

    this.bienService.getAllBiens().subscribe(data =>{
      console.log("amy22: ",data);
      this.biens = data;
    });
  }

  public ajouterContrat(): void {
    console.log("ajouterrr: ",this.contratForm.value)
    if(this.contratForm.valid){
      if(this.contratForm.dirty){
        const contrat : Contrat = {
          ...this.newContrat,
          ...this.contratForm.value
        };

        this.contratService.addContrat(contrat).subscribe({
          next :() => this.saveCompleted(),
          error: (err) => { alert("Probléme lors de l'ajout !"); }
        });
      }
    }
  }

  public saveCompleted(): void {
    this.contratForm.reset();
    this.router.navigate(['/contrats']);
  }

}
