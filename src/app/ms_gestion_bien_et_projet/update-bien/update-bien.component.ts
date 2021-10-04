import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bien } from 'src/app/model/bien.model';
import { BienService } from 'src/app/services/gestion-bien-et-projet/bien.service';

@Component({
  selector: 'app-update-bien',
  templateUrl: './update-bien.component.html',
  styleUrls: ['./update-bien.component.css']
})
export class UpdateBienComponent implements OnInit {

  public bienForm: FormGroup;
  public currentbien = new Bien();
  public pageTitle: string;
  public imageURL: string;

  progress: number;
  currentFileUpload: any;
  selectedFiles;
  editPhoto: boolean;
  private currentTime: number = 0;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public bienService: BienService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.bienForm = this.fb.group({
      nomBien: ['', Validators.required],
      prix: ['', Validators.required],
      rating: ['', Validators.required],
      description: ['', Validators.required],
      available: ['', Validators.required],
      //photoName: ['', Validators.required],
      //photoNameFileSource: ['', Validators.required],
      localisation: ['', Validators.required],
      selected: ['', Validators.required],
      taille: ['', Validators.required]
    });

    console.log("iddddddd: ", this.activatedRoute.snapshot.params.id);
    this.bienService.getBienById(this.activatedRoute.snapshot.params.id).subscribe((bien) => {
      //console.log("bushraaaaaaaaa: ", this.afficher(bien));
      console.log("biennn morr: ",bien);
      
      this.afficher(bien);
    });
  }

  public updateBien(): void{
    if(this.bienForm.valid){
      if(this.bienForm.dirty){
        const bien : Bien = {
          ...this.currentbien,
          ...this.bienForm.value
        };
        
        console.log("currentbien: ", this.currentbien);
        this.bienService.updateBien(this.activatedRoute.snapshot.params.id, bien).subscribe({
          next: () => this.saveCompleted(),
        });
      }
    }
  }

  public saveCompleted(): void{
    this.bienForm.reset();
    this.router.navigate(['/biens']);
  }
             //https://www.geeksforgeeks.org/angular-file-upload/
  public afficher(bien): void{
    console.log("aficheeeeerrrrrr: ",this.currentbien);
    this.currentbien = bien;
    console.log("afterrrr: ",this.currentbien);

    this.pageTitle = "Modification du bien "+this.currentbien.nomBien;
    this.bienForm.patchValue({
      nomBien: this.currentbien.nomBien,
      prix: this.currentbien.prix,
      rating: this.currentbien.rating,
      description: this.currentbien.description,
      available: this.currentbien.available,
      //photoName: this.currentbien.photoName,
      localisation: this.currentbien.localisation,
      selected: this.currentbien.selected,
      taille: this.currentbien.taille
    });
  }

  onEditPhoto(p) {
    this.currentbien = p;
    this.editPhoto = true;
  }

  onSelectedFile(event) {
    //console.log("eventt: ",event);   
    this.selectedFiles=event.target.files;
    
    /*const file = (event.target as HTMLInputElement).files[0];
    this.bienForm.patchValue({
      photoNameFileSource: file
    });
    this.bienForm.get('photoNameFileSource').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file); */
  }

  public chargerPhoto(): void{
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.bienService.uploadPhotoBien(this.currentFileUpload, this.currentbien.idBienImmo).subscribe( event => {
      if(event.type === HttpEventType.UploadProgress){

        this.progress = Math.round(100 * event.loaded / event.total);

      }else if (event instanceof HttpResponse){

        this.currentTime = Date.now();
        this.editPhoto = false

      }
    },err => {
      alert("Probléme de chargement");
    });

    this.selectedFiles = undefined;
  }

  getTS() {
    return this.currentTime;
  }

}
