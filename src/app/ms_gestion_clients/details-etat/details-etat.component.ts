import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etat } from 'src/app/model/etat';
import { EtatsService } from 'src/app/services/gestion-client/etats.service';

@Component({
  selector: 'app-details-etat',
  templateUrl: './details-etat.component.html',
  styleUrls: ['./details-etat.component.css']
})
export class DetailsEtatComponent implements OnInit {

  public etat: Etat;

  constructor(
    private router: Router,
    private etatService: EtatsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.etatService.getEtatById(this.activatedRoute.snapshot.params.id).subscribe(c => {
      this.etat = c;
    });
  }

  public backToList(): void {
    this.router.navigate(['/etats']);
  }

}
