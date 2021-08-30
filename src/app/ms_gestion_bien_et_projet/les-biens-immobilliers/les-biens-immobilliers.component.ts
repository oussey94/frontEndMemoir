import { BienImmobillierService } from '../../services/bien-immobillier.service';
import { Component, OnInit } from '@angular/core';
import { Bien } from '../../model/bien.model';
import { BienService } from 'src/app/services/bien.service';

@Component({
  selector: 'app-les-biens-immobilliers',
  templateUrl: './les-biens-immobilliers.component.html',
  styleUrls: ['./les-biens-immobilliers.component.css']
})
export class LesBiensImmobilliersComponent implements OnInit {
  public title="les biens immobillier disponible";

  public biens: Bien[];
  public showBadge: boolean ;
  private _bienFilter="mot";

  public filteredBiens: Bien[] = [];

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

}
