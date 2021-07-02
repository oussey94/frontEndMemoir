import { Bien } from './../model/bien.model';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { BienImmobillierService } from '../services/bien-immobillier.service';

@Component({
  selector: 'app-edit-bien',
  templateUrl: './edit-bien.component.html',
  styleUrls: ['./edit-bien.component.css']
})
export class EditBienComponent implements OnInit {

  public bienForm: FormGroup;
  public bien: Bien;
  public pageTitle: string;
  public errorMessage: string;

  constructor(
              private fb: FormBuilder, 
              private route: ActivatedRoute, 
              private bienService: BienImmobillierService,
              private router: Router) { }

  ngOnInit(): void {
    this.bienForm = this.fb.group({
      hotelName: ['', Validators.required],
      price: ['', Validators.required],
      rating: [''],
      description: ['']
    });

    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');

      this.getSelectedBien(id);
    });
  }

  public getSelectedBien(id: number){
     this.bienService.getBienById(id).subscribe((bien: Bien) => {
       //console.log(bien); 
       this.displayedBien(bien);
     });
  }

  public displayedBien(bien: Bien): void {
    this.bien = bien;

    if(this.bien.id === 0) {
      this.pageTitle = 'Créer un bien';
    } else {
      this.pageTitle=`Modifier le bien ${this.bien.hotelName}`;
    }
    
    this.bienForm.patchValue({
      hotelName: this.bien.hotelName,
      price: this.bien.price,
      rating: this.bien.rating,
      description: this.bien.description
    });
  }

  public saveBienImmo(): void {
      if(this.bienForm.valid) {
        if(this.bienForm.dirty) {
          const bien: Bien = {
            ...this.bien,
            ...this.bienForm.value
          };

          //add or edit
          if(bien.id === 0) {
              this.bienService.createBien(bien).subscribe({
                next: () => this.saveCompleted()
              });
          }else {
            this.bienService.updateBien(bien).subscribe({
            next: () => this.saveCompleted(),
            error: (err) =>this.errorMessage=err});
          }
        }
      }
  }

  public saveCompleted(): void {
    this.bienForm.reset();
    this.router.navigate(['/biens']);
  }

  public deleteBienImmo(): void{
    if(confirm(`Voulez-vous réelement supprimer ${this.bien.hotelName} ?`)) {
      this.bienService.deleteBien(this.bien.id).subscribe({
        next: () =>this.saveCompleted()
      });
    }
  }

}
