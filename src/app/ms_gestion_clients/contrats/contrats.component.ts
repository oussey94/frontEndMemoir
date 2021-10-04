import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/model/contrat';
import { ContratsService } from 'src/app/services/gestion-client/contrats.service';

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.css']
})
export class ContratsComponent implements OnInit {

  public contrats: Contrat[];

  constructor(private contractService: ContratsService) { }

  ngOnInit(): void {
    this.contractService.getAllContrats().subscribe(contrat => {
      console.log(contrat);
      this.contrats = contrat;
    });
  }

  supprimerContrat(contrat: Contrat){
    let conf=confirm("Etes vous certains de vouloir supprimé le contrat ?");
    if(conf){
      this.contractService.deleteContrat(contrat.idContrat).subscribe(() => {
        this.supprimerContratDuTableau(contrat);
      });
    }
  }

  supprimerContratDuTableau(c: Contrat){
    this.contrats.forEach((curr, index) => {
      if(c.idContrat === curr.idContrat){
        this.contrats.splice(index, 1);
      }
    });
  }

}
