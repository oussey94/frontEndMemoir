import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrat } from '../model/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratsService {
  public readonly url_contrats: string = 'http://localhost:8088/contrats';

  constructor(private http: HttpClient) { }

  public getAllContrats(): Observable<Contrat[]>{
    return this.http.get<Contrat[]>(this.url_contrats);
  }

  public getContratById(id: number): Observable<Contrat>{
    const url = `${this.url_contrats}/${id}`;
    return this.http.get<Contrat>(url);
  }

  public addContrat(contrat: Contrat): Observable<Contrat>{
    return this.http.post<Contrat>(this.url_contrats, contrat);
  }

  public updateContrat(id: number, contrat: Contrat): Observable<Contrat>{
    const url= `${this.url_contrats}/${id}`
    return this.http.put<Contrat>(url, contrat);
  }

  public deleteContrat(id: number): Observable<{}>{
    const url= `${this.url_contrats}/${id}`
    return this.http.delete<{}>(url);
  }
}
