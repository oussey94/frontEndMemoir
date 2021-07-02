import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Visite } from 'src/app/model/visite';
import { VisitesService } from 'src/app/services/visites.service';

@Component({
  selector: 'app-add-visite',
  templateUrl: './add-visite.component.html',
  styleUrls: ['./add-visite.component.css']
})
export class AddVisiteComponent implements OnInit {

  newVisite = new Visite();
  visiteForm: FormGroup;
  errorMessage: string = "Probléme lors de l'ajout !!!";

  constructor(private visiteService: VisitesService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.visiteForm = this.fb.group({
      dateVisite: ['',Validators.required],
      heureVisite: [' |date:"hh:mm:ss"',Validators.required]
    });

  }

  addVisite(){
    this.visiteService.addVisite(this.newVisite).subscribe({
      next: () => this.saveCompleted(),
      error: (err) => this.errorMessage = err
    }
    );

    //this.router.navigate(["/visites"]);
  }

  public saveCompleted(): void {
    this.visiteForm.reset();
    this.router.navigate(['/visites']);
  }

}
