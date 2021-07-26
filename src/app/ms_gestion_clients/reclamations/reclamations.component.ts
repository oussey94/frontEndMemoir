import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/model/reclamation';
import { ReclamationsService } from 'src/app/services/reclamations.service';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.css']
})
export class ReclamationsComponent implements OnInit {

  public reclamations: Reclamation[];

  constructor(private reclamationService: ReclamationsService) { }

  ngOnInit(): void {
    this.reclamationService.getAllReclamations().subscribe( recl => {
      this.reclamations = recl;
    });
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
