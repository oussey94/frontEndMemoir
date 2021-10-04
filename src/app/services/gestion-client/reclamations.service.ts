import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrat } from '../../model/contrat';
import { Etat } from '../../model/etat';
import { Reclamation } from '../../model/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationsService {

  public readonly url_reclamations: string = 'http://localhost:8088/reclamations';
  public readonly url_etats: string = 'http://localhost:8088/etats';
  public readonly url_contrats: string = 'http://localhost:8088/contrats';

  constructor(private http: HttpClient) { }

  public getAllReclamations(): Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.url_reclamations);
  }

  public getAllEtatsInRe(): Observable<Etat[]>{
    return this.http.get<Etat[]>(this.url_etats);
  }

  public getAllContratsInRe(): Observable<Contrat[]>{
    return this.http.get<Contrat[]>(this.url_contrats);
  }

  public getReclamationById(id: number): Observable<Reclamation>{
    const url = `${this.url_reclamations}/${id}`;
    return this.http.get<Reclamation>(url);
  }

  public addReclamation(reclamation: Reclamation): Observable<Reclamation>{
    return this.http.post<Reclamation>(this.url_reclamations, reclamation);
  }

  public updateReclamation(id: number, reclamation: Reclamation): Observable<Reclamation>{
    const url= `${this.url_reclamations}/${id}`
    return this.http.put<Reclamation>(url, reclamation);
  }

  public deleteReclamation(id: number): Observable<{}>{
    const url= `${this.url_reclamations}/${id}`
    return this.http.delete<{}>(url);
  }

}
