import { VisitesService } from './../../services/gestion-client/visites.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Visite } from 'src/app/model/visite';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { ClientService } from 'src/app/services/gestion-utilisateur/client.service';
import { BienService } from 'src/app/services/gestion-bien-et-projet/bien.service';

@Component({
  selector: 'app-edit-visite',
  templateUrl: './edit-visite.component.html',
  styleUrls: ['./edit-visite.component.css']
})
export class EditVisiteComponent implements OnInit {

  public current_visite = new Visite();
  visites;//: Visite[];
  public clients: any;
  public biens: any;
  public visiteForm : FormGroup;
  public pageTitle: string;
  //errorMessage: string = "Probléme lors de la modification !!!";


  constructor(
    private fb: FormBuilder,
    private activatedRoute : ActivatedRoute, 
    private router: Router, 
    private visiteService: VisitesService,
    private clientService: ClientService,
    private bienService: BienService,
    ) { }

  ngOnInit(): void {

    this.visiteForm = this.fb.group({
      dateVisite : ['',Validators.required],
      heureVisite: ['',Validators.required],
      clientID: ['', Validators.required],
      bienImmobiliereID: ['', Validators.required]
    });

    this.visiteService.getVisiteParId(this.activatedRoute.snapshot.params.id).subscribe((visite: Visite) =>{
      this.displayedVisite(visite);
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

  updateVisite(){
    if(this.visiteForm.valid) {
      if(this.visiteForm.dirty) {
        const visite: Visite = {
          ...this.current_visite,
          ...this.visiteForm.value
        };

        this.visiteService.updateVisite(this.activatedRoute.snapshot.params.id, visite).subscribe({
          next: () => this.saveCompleted(),
          error: (err) => { alert("Probléme lors de la modification !"); } //error: (err) => this.errorMessage = err

        });
      }
    }
    
  }

  public saveCompleted(): void {
    this.visiteForm.reset();
    this.router.navigate(['/visites']);
  }


  public displayedVisite(visite: Visite): void {
    this.current_visite = visite;

   // if(this.current_visite.idVisite === 0) {
   //   this.pageTitle = 'Créer une visite';
   // } else {
      this.pageTitle=`Modifier la visite ${this.current_visite.idVisite}`;
   // }
    
    this.visiteForm.patchValue({
      dateVisite : this.current_visite.dateVisite,
      heureVisite: this.current_visite.heureVisite,
      clientID: this.current_visite.clientID,
      bienImmobiliereID: this.current_visite.bienImmobiliereID
      
    });
  }

}
