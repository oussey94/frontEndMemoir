import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Visite } from 'src/app/model/visite';
import { BienService } from 'src/app/services/gestion-bien-et-projet/bien.service';
import { VisitesService } from 'src/app/services/gestion-client/visites.service';

@Component({
  selector: 'app-details-visite',
  templateUrl: './details-visite.component.html',
  styleUrls: ['./details-visite.component.css']
})
export class DetailsVisiteComponent implements OnInit {

  public visit;

  constructor(
    private router: Router,
    private visiteService: VisitesService,
    public bienImmobillierService: BienService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.visiteService.getVisiteParId(this.activatedRoute.snapshot.params.id).subscribe(v =>{
      console.log("vvvvvvvvvvvv :",v);
      this.visit = v;
    });
  }

  public backToList(): void {
    this.router.navigate(['/visites']);
  }

}
