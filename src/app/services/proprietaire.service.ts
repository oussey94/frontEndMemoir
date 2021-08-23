import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proprietaire } from '../model/proprietaire';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {

  public readonly url_pro: string = "http://localhost:8089/proprietaires";

  constructor(private http: HttpClient) { }

  public getAllProprietaires(): Observable<Proprietaire[]>{
    return this.http.get<Proprietaire[]>(this.url_pro);
  }

  public getProprietaireById(id: number): Observable<Proprietaire>{
    const url = `${this.url_pro}/${id}`;
    return this.http.get<Proprietaire>(url);
  }

  public addProprietaire(proprietaire: Proprietaire): Observable<Proprietaire>{
    return this.http.post<Proprietaire>(this.url_pro, proprietaire);
  }

  public updateClient(id: number, proprietaire: Proprietaire): Observable<Proprietaire>{
    const url= `${this.url_pro}/${id}`
    return this.http.put<Proprietaire>(url, proprietaire);
  }

  public deleteClient(id: number): Observable<{}>{
    const url= `${this.url_pro}/${id}`
    return this.http.delete<{}>(url);
  }
}
