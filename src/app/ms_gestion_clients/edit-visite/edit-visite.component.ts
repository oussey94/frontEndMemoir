import { VisitesService } from './../../services/visites.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Visite } from 'src/app/model/visite';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-visite',
  templateUrl: './edit-visite.component.html',
  styleUrls: ['./edit-visite.component.css']
})
export class EditVisiteComponent implements OnInit {

  public current_visite = new Visite();
  visites: Visite[];
  public visiteForm : FormGroup;
  public pageTitle: string;
  errorMessage: string = "Probléme lors de l'ajout !!!";


  constructor(
    private fb: FormBuilder,
    private activatedRoute : ActivatedRoute, 
    private router: Router, 
    private visiteService: VisitesService
    ) { }

  ngOnInit(): void {

    this.visiteForm = this.fb.group({
      dateVisite : ['',Validators.required],
      heureVisite: [' |date:"hh:mm:ss"',Validators.required]
    });

    this.visiteService.getVisiteParId(this.activatedRoute.snapshot.params.id).subscribe((visite: Visite) =>{
      this.displayedVisite(visite);
    });
  }

  updateVisite(){
    this.visiteService.updateVisite(this.activatedRoute.snapshot.params.id, this.current_visite).subscribe({
      next: () => this.saveCompleted(),
      error: (err) => this.errorMessage = err
    });
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
      heureVisite: this.current_visite.heureVisite
      
    });
  }

}
