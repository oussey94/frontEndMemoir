import { BienService } from 'src/app/services/gestion-bien-et-projet/bien.service';
//import { BienImmobillierService } from '../../services/bien-immobillier.service';
import { Bien } from '../../model/bien.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.css']
})
export class DetailBienComponent implements OnInit {

  public bien; // Bien= <Bien>{};

  constructor(
    private route: ActivatedRoute,
    public bienImmobillierService: BienService,
    private router: Router) { }

  ngOnInit(): void {
    //const id: number = +this.route.snapshot.paramMap.get('id');

    /*this.bienImmobillierService.getBiensImmo().subscribe((biens: Bien[]) => {
      this.bien=biens.find(bien => bien.id == id);
      console.log("bien: ",this.bien);
    });
    */

    this.bienImmobillierService.getBienById((this.route.snapshot.params.id)).subscribe(con => {
      console.log("biennnnn:",con);
      this.bien = con;
      //console.log("contrat:", this.contrat);
    });
  }

  public backToList(): void {
    this.router.navigate(['/biens']);
  }

}
