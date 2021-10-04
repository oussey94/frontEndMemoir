import { Component, OnInit } from '@angular/core';
import { Etat } from 'src/app/model/etat';
import { EtatsService } from 'src/app/services/gestion-client/etats.service';

@Component({
  selector: 'app-etats',
  templateUrl: './etats.component.html',
  styleUrls: ['./etats.component.css']
})
export class EtatsComponent implements OnInit {

  public etats: Etat[];

  constructor(private etatService: EtatsService) { }

  ngOnInit(): void {
    this.etatService.getAllEtats().subscribe(etat => {
      this.etats = etat;
    });
  }

  supprimerEtat(etat: Etat){
    let conf=confirm("Etes vous certains de vouloir supprimé l'etat ?");
    if(conf){
      this.etatService.deleteEtat(etat.idEtat).subscribe(() => {
        this.supprimerEtatDuTableau(etat);
      });
    }
  }

  supprimerEtatDuTableau(e: Etat){
    this.etats.forEach((curr, index) => {
      if(e.idEtat === curr.idEtat){
        this.etats.splice(index,1);
      }
    });
  }

}
