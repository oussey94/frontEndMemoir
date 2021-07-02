import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/model/contrat';

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.css']
})
export class ContratsComponent implements OnInit {

  public contrats: Contrat[];

  constructor() { }

  ngOnInit(): void {
  }

}
