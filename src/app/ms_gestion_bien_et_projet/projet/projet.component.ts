import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/model/projet';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  public projets: Projet[];

  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {

    this.projetService.getAllProjets().subscribe(t => {
      this.projets = t;
    });
  }

  public supprimerProjet(projet: Projet): void {
    this.projetService.deleteProjet(projet.idProjet).subscribe({
      next: () => this.supprimerProjetDuTableau(projet)
    });
  }

  public supprimerProjetDuTableau(projet: Projet): void {
    this.projets.forEach((curr, index) => {
      if (curr.idProjet === projet.idProjet){
        this.projets.splice(index,1);
      }
    });
  }

}
