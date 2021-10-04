import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from 'src/app/model/reclamation';
import { ReclamationsService } from 'src/app/services/gestion-client/reclamations.service';

@Component({
  selector: 'app-details-reclamation',
  templateUrl: './details-reclamation.component.html',
  styleUrls: ['./details-reclamation.component.css']
})
export class DetailsReclamationComponent implements OnInit {

  public reclamation: Reclamation;

  constructor(
    private router: Router,
    private reclamationService: ReclamationsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.reclamationService.getReclamationById(this.activatedRoute.snapshot.params.id).subscribe(r => {
      console.log("rrrrr: ",r);
      this.reclamation = r;
    });
  }

  public backToList(): void {
    this.router.navigate(['/reclamations']);
  }

}
