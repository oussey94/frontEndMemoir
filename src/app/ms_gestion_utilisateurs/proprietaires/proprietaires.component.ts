import { ProprietaireService } from './../../services/proprietaire.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-proprietaires',
  templateUrl: './proprietaires.component.html',
  styleUrls: ['./proprietaires.component.css']
})
export class ProprietairesComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[]= [
    "id","nom","prenom","email","userName","password",
  "telephone1","telephone2","adresse","age","ville","edit","delete"
];

dataSource = new MatTableDataSource;

@ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private proprietaireService: ProprietaireService) { }
  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.proprietaireService.getAllProprietaires().subscribe(data => {
      console.log("dataaa:",data);
      this.dataSource= new MatTableDataSource(data);
    });
  }

}
