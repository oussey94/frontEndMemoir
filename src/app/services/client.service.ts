import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  public readonly url_client: string ="http://localhost:8089/clients";

  constructor(private http: HttpClient) { }

  public getAllClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.url_client);
  }

  public getClientById(id: number): Observable<Client>{
    const url = `${this.url_client}/${id}`;
    return this.http.get<Client>(url);
  }

  public addClient(client: Client): Observable<Client>{
    return this.http.post<Client>(this.url_client, client);
  }

  public updateClient(id: number, client: Client): Observable<Client>{
    const url= `${this.url_client}/${id}`
    return this.http.put<Client>(url, client);
  }

  public deleteClient(id: number): Observable<{}>{
    const url= `${this.url_client}/${id}`
    return this.http.delete<{}>(url);
  }
}
