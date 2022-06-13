import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Contrat } from 'src/app/model/contrat';
import { ContratsService } from 'src/app/services/gestion-client/contrats.service';

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.css']
})
export class ContratsComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  public contrats: Contrat[];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private contractService: ContratsService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4,
     // dom: 'Bfrtip',
      //buttons: ['copy','csv','excel','pdf','print'],
      language: {
        processing: "Traitement en cours ...",
        lengthMenu: "Afficher _MENU_ lignes",
        zeroRecords: "Aucun résultat trouvé",
        emptyTable: "Aucune donnée disponible",
        info: "Lignes _START_ à _END_ sur _TOTAL_",
        infoEmpty: "Aucune ligne affichée",
        infoFiltered: "(Filtrer un maximum de_MAX_)",
        infoPostFix: "",
        search: "Chercher:",
        url: "",
        //infoThousands: ",",
        loadingRecords: "Chargement...",
        paginate: {
          first: "Premier", last: "Dernier", next: "Suivant", previous: "Précédent"
        },
        aria: {
          sortAscending: ": Trier par ordre croissant", sortDescending: ": Trier par ordre décroissant"
        }
      }
    };

    this.contractService.getAllContrats().subscribe(contrat => {
      console.log(contrat);
      this.contrats = contrat;

      this.dtTrigger.next();
    });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
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
