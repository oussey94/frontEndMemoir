//import { BienImmobillierService } from '../../services/bien-immobillier.service';
import { Component, OnInit } from '@angular/core';
import { Bien } from '../../model/bien.model';
import { BienService } from 'src/app/services/gestion-bien-et-projet/bien.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-les-biens-immobilliers',
  templateUrl: './les-biens-immobilliers.component.html',
  styleUrls: ['./les-biens-immobilliers.component.css']
})
export class LesBiensImmobilliersComponent implements OnInit {
  public title="les biens immobillier disponible";

  public biens;
  public showBadge: boolean ;
  private _bienFilter="mot";

  //products;
  editPhoto: boolean;
  currentBien: any;
  selectedFiles;
  progress: number;
  currentFileUpload: any;
  //title:string;
  currentRequest:string;
 private currentTime: number=0;

  public filteredBiens: any = []; //Bien[]

  public receivedRating:string;
  public errMsg: string;

  public toggleIsNewBadge(): void{
        this.showBadge= !this.showBadge;
  }

  constructor(
        public bienImmobillierService: BienService
        ) { }

  ngOnInit(): void {
        this.bienImmobillierService.getAllBiens().subscribe(
              b =>{
                    console.log("ousseyyyyy: ",b);
                    this.biens = b;
                    this.filteredBiens = this.biens;
                    console.log("amyyyyy: ",this.filteredBiens);
              }
              
            /*{
            next: biens =>{this.biens=biens;
                  this.filteredBiens=this.biens;
            }, 
            error: err => this.errMsg=err
        }*/
        );
        //this.filteredBiens=this.biens;
        this.bienFilter='';
        //console.log("mon niveau de vie initial fonctionne")
  }

  public receiveRatingClicked(message: string): void{
      this.receivedRating=message;
  }

  public get bienFilter(): string {
    return this._bienFilter;
}

public set bienFilter(filter:string){
      this._bienFilter=filter;
      this.filteredBiens=this.bienFilter ? this.filterBiens(this.bienFilter) : this.biens;
}

private filterBiens(criteria: string): Bien[]{
      criteria=criteria.toLocaleLowerCase();

      const res=this.biens.filter(
            (bien: Bien) => bien.nomBien.toLocaleLowerCase().indexOf(criteria) != -1
            );
       return res;
}

onEditPhoto(p) {
      this.currentBien=p;
      this.editPhoto=true;
    }
  
    onSelectedFile(event) {
      this.selectedFiles=event.target.files;
    }
  
    uploadPhoto() {
          alert("je testtttt");
      this.progress = 0;
      this.currentFileUpload = this.selectedFiles.item(0)
      this.bienImmobillierService.uploadPhotoBien(this.currentFileUpload, this.currentBien.idBienImmo).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          //console.log(this.router.url);
          //this.getProducts(this.currentRequest);
          //this.refreshUpdatedProduct();
          this.currentTime=Date.now();
        }
      },err=>{
        alert("Problème de chargement !!!");
      });
  
  
  
      this.selectedFiles = undefined
    }

    getTS() {
      return this.currentTime;
    }

}
