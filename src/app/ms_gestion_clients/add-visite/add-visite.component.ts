import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Visite } from 'src/app/model/visite';
import { BienService } from 'src/app/services/gestion-bien-et-projet/bien.service';
import { ClientService } from 'src/app/services/gestion-utilisateur/client.service';
import { VisitesService } from 'src/app/services/gestion-client/visites.service';

@Component({
  selector: 'app-add-visite',
  templateUrl: './add-visite.component.html',
  styleUrls: ['./add-visite.component.css']
})
export class AddVisiteComponent implements OnInit {

  newVisite = new Visite();
  visiteForm: FormGroup;
  public clients: any;
  public biens: any;
  errorMessage: string = "Probléme lors de l'ajout !!!";

  constructor(
    private visiteService: VisitesService, 
    private clientService: ClientService,
    private bienService: BienService,
    private router: Router, 
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.visiteForm = this.fb.group({
      dateVisite: ['',Validators.required],
      heureVisite: ['',Validators.required],
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

  addVisite(){
    if(this.visiteForm.valid) {
      if(this.visiteForm.dirty) {
        const visite: Visite = {
          ...this.newVisite,
          ...this.visiteForm.value
        };

        this.visiteService.addVisite(visite).subscribe({
          next: () => this.saveCompleted(),
          error: (err) => { alert("Probléme lors de l'ajout !"); }
        }
        );
      }
    }

    //this.router.navigate(["/visites"]);
  }

  public saveCompleted(): void {
    this.visiteForm.reset();
    this.router.navigate(['/visites']);
  }

}
