import { ClientService } from './../../services/gestion-utilisateur/client.service';
import { BienService } from '../../services/gestion-bien-et-projet/bien.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/model/contrat';
import { ContratsService } from 'src/app/services/gestion-client/contrats.service';

@Component({
  selector: 'app-edit-contrat',
  templateUrl: './edit-contrat.component.html',
  styleUrls: ['./edit-contrat.component.css']
})
export class EditContratComponent implements OnInit {
  public current_contrat = new Contrat();
  public clients: any;
  public biens: any;
  contratForm : FormGroup;
  errorMessage: string = "Probléme lors de la modification !!!";

  constructor(
    private contractService : ContratsService,
    private clientService: ClientService,
    private bienService: BienService,
    private fb : FormBuilder, 
    private activatedRoute : ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {
    const pipe = new DatePipe('en-US');
    this.contratForm = this.fb.group({
      caution: ['', Validators.required],
      prixEffectif: ['', Validators.required],
      dateEffectif: [pipe.transform(this.current_contrat.dateEffectif, 'MM/dd/yyyy'), Validators.required],
      dureeEnNbrDeMois: ['', Validators.required],
      description: ['', Validators.required],
      //client: ['', Validators.required],
      //bien: ['', Validators.required],
      clientID: ['', Validators.required],
      bienImmobiliereID: ['', Validators.required]
    });

    this.contractService.getContratById(this.activatedRoute.snapshot.params.id).subscribe((contrat: Contrat) => {
      this.displayContrat(contrat);
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

  public updateUnContrat(): void {
    if(this.contratForm.valid) {
      if(this.contratForm.dirty) {
        const contrat: Contrat = {
          ...this.current_contrat,
          ...this.contratForm.value
        };

        this.contractService.updateContrat(this.activatedRoute.snapshot.params.id, contrat).subscribe({
          next: () => this.saveCompleted(),
          error: (err) => { alert("Probléme lors de la modification !"); }
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
      dureeEnNbrDeMois: this.current_contrat.dureeEnNbrDeMois,
      description: this.current_contrat.description,
      //client: this.current_contrat.client,
      //bien: this.current_contrat.bien,
      clientID: this.current_contrat.clientID,
      bienImmobiliereID: this.current_contrat.bienImmobiliereID
    });
  }

}
