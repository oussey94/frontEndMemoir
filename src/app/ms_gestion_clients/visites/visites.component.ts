import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Visite } from 'src/app/model/visite';
import { VisitesService } from 'src/app/services/gestion-client/visites.service';

@Component({
  selector: 'app-visites',
  templateUrl: './visites.component.html',
  styleUrls: ['./visites.component.css']
})
export class VisitesComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  public  visites: Visite[];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private visiteService: VisitesService) { }


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
    this.visiteService.listeDesVisites().subscribe(visitess =>{
      console.log("visiiii: ",visitess);
      this.visites=visitess;
      
      this.dtTrigger.next();
    });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
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
