import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Reclamation } from 'src/app/model/reclamation';
import { ReclamationsService } from 'src/app/services/gestion-client/reclamations.service';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.css']
})
export class ReclamationsComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  public reclamations: Reclamation[];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private reclamationService: ReclamationsService) { }

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

    this.reclamationService.getAllReclamations().subscribe( recl => {
      console.log("reclll: ",recl);
      this.reclamations = recl;
      this.dtTrigger.next();
    });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  supprimerReclamation(reclamation: Reclamation){
    let conf=confirm("Etes vous certains de vouloir supprimé la reclamation ?");
    if(conf){
      this.reclamationService.deleteReclamation(reclamation.idReclamation).subscribe(() => {
        this.supprimerReclamationDuTableau(reclamation);
      });
    }
  }

  supprimerReclamationDuTableau(r: Reclamation){
    this.reclamations.forEach((curr, index) => {
      if(r.idReclamation == curr.idReclamation){
        this.reclamations.splice(index,1);
      }
    });
  }

}
