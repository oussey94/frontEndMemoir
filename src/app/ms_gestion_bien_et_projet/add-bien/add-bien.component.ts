import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bien } from 'src/app/model/bien.model';
import { BienService } from 'src/app/services/gestion-bien-et-projet/bien.service';

@Component({
  selector: 'app-add-bien',
  templateUrl: './add-bien.component.html',
  styleUrls: ['./add-bien.component.css']
})
export class AddBienComponent implements OnInit {

  public newBien = new Bien();
  bienForm: FormGroup;
  progress: number = 0;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private bienService: BienService
  ) { }

  ngOnInit(): void {
    this.bienForm = this.fb.group({
      nomBien: ['', Validators.required],
      prix: ['', Validators.required],
      rating: ['', Validators.required],
      description: ['', Validators.required],
      available: ['', Validators.required],
      photoName: ['', Validators.required],
      image: [null, Validators.required],
      localisation: ['', Validators.required],
      selected: ['', Validators.required],
      taille: ['', Validators.required]
    });
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.bienForm.patchValue({
      image: file
    });
    this.bienForm.get('image').updateValueAndValidity()
  }

    public chargerImage(): void{
    
    //this.currentFileUpload = this.selectedFiles;
    this.bienService.uploadPhotoBien(this.bienForm.value.image, this.newBien.idBienImmo).subscribe( event => {
      if(event.type === HttpEventType.UploadProgress){

        this.progress = Math.round(100 * event.loaded / event.total);

      }else if (event instanceof HttpResponse){

        //this.currentTime = Date.now();

      }
    },err => {
      alert("Probléme de chargement");
    });

    //this.selectedFiles = undefined;
  }

  public ajoutBien(): void{
    if(this.bienForm.valid){
      if(this.bienForm.dirty){
        const bien : Bien = {
          ...this.newBien,
          ...this.bienForm.value
        };

        this.bienService.addBien(bien).subscribe({
          next: () => this.saveCompleted()
        });
      }
    }
  }

  public saveCompleted(): void{
    this.bienForm.reset();
    this.router.navigate(['/biens']);
  }

}
