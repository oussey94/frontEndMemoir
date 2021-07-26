import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/model/contrat';
import { ContratsService } from 'src/app/services/contrats.service';

@Component({
  selector: 'app-details-contrat',
  templateUrl: './details-contrat.component.html',
  styleUrls: ['./details-contrat.component.css']
})
export class DetailsContratComponent implements OnInit {

  public contrat: Contrat; // = <Contrat>{};

  constructor(
    private contratService: ContratsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /*this.contratService.getAllContrats().subscribe((contrats: Contrat[]) => {
      this.contrat = contrats.find(contrat => contrat.idContrat == this.activatedRoute.snapshot.params.id);
      console.log("contrat:", this.contrat);
    });*/
    this.contratService.getContratById(this.activatedRoute.snapshot.params.id).subscribe(con => {
      this.contrat = con;
      //console.log("contrat:", this.contrat);
    });
  }

  public backToList(): void {
    this.router.navigate(['/contrats']);
  }

}
