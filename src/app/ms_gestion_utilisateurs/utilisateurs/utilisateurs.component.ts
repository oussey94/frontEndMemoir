import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UtilisateurService } from 'src/app/services/gestion-utilisateur/utilisateur.service';
import { Utilisateur } from 'src/app/model/utilisateur';
import { MatDialog } from '@angular/material/dialog';
import { EditUtilisateurComponent } from '../edit-utilisateur/edit-utilisateur.component';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[]= [
    "id","nom","prenom","email","userName","password",
  "telephone1","telephone2","adresse","age","ville","edit","delete"
];

 public dataSource = new MatTableDataSource;

 @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private utilisateurService: UtilisateurService,
    private dialog: MatDialog
  ) { }
  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.utilisateurService.getAllUsers().subscribe(d => {
      console.log(d);
      this.dataSource = new MatTableDataSource(d);
      console.log(this.dataSource);
    });
  }

  public updateUser(data: Utilisateur): void {

    const dialogRef = this.dialog.open(EditUtilisateurComponent, {
      width: '700px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.utilisateurService.updateUser(data.idUser, data).subscribe();
      }
    });
  }

}
