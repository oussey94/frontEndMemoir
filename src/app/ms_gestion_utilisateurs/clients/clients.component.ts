import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public displayedColumns: string[]= [
    "id","nom","prenom","email","userName","password",
  "telephone1","telephone2","adresse","age","ville","edit","delete"
];

dataSource = new MatTableDataSource;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
