import { Component, OnInit } from '@angular/core';
import { Visite } from 'src/app/model/visite';
import { VisitesService } from 'src/app/services/gestion-client/visites.service';

@Component({
  selector: 'app-visites',
  templateUrl: './visites.component.html',
  styleUrls: ['./visites.component.css']
})
export class VisitesComponent implements OnInit {

  public  visites: Visite[];

  constructor(private visiteService: VisitesService) { }

  ngOnInit(): void {
    this.visiteService.listeDesVisites().subscribe(visitess =>{
      console.log("visiiii: ",visitess);
      this.visites=visitess;
    });
  }

  deleteVisite(v: Visite){
    let conf=confirm("Etes vous certains de vouloir supprimé la visite ?");
    if(conf){
      this.visiteService.deleteVisite(v.idVisite).subscribe(() =>{
        this.supprimerVisiteDuTab(v);
      });
    }
  }

  supprimerVisiteDuTab(visite: Visite){
    this.visites.forEach((cur, index) =>{
      if(visite.idVisite === cur.idVisite){
        this.visites.splice(index,1);
      }
    });
  }

}
