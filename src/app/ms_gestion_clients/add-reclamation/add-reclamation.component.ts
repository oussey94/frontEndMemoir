import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contrat } from 'src/app/model/contrat';
import { Etat } from 'src/app/model/etat';
import { Reclamation } from 'src/app/model/reclamation';
import { ContratsService } from 'src/app/services/gestion-client/contrats.service';
import { EtatsService } from 'src/app/services/gestion-client/etats.service';
import { ReclamationsService } from 'src/app/services/gestion-client/reclamations.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {

  public newReclamation = new Reclamation();
  public reclamationForm : FormGroup;
  public etats;//: Etat[];
  public contrats;//: Contrat;
  //errorMessage: string = "Probléme lors de l'ajout !!!";

  constructor(
    private reclamationService : ReclamationsService, 
    //private etatService: EtatsService,
    //private contratService: ContratsService,
    private router : Router, 
    private fb : FormBuilder
    ) { }

  ngOnInit(): void {
    this.reclamationForm = this.fb.group({
      commentaire: ['', Validators.required],
      contrat: ['', Validators.required],
      etat: ['', Validators.required]
    });

    this.reclamationService.getAllEtatsInRe().subscribe(data =>{
      console.log("safaaar: ",data);
      //console.log('les etats' + JSON.stringify(data));
      this.etats = data;
    });

    this.reclamationService.getAllContratsInRe().subscribe(data=>{
      console.log("apress safaar: ",data);
      //console.log('les contrats' + JSON.stringify(data));
      this.contrats = data;
    });
  }

  public ajouterReclamation(): void {
    if(this.reclamationForm.valid){
      console.log("formmm: ",this.reclamationForm.value);
      if (this.reclamationForm.dirty){
        const reclamation : Reclamation = {
          ...this.newReclamation,
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

  public listEtat(): void{

  }

}

//https://stackoverflow.com/questions/63707863/angular-spring-boot-rest-cannot-post-an-entity-with-foreign-key
