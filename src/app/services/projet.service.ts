import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from '../model/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private url_projet: string="http://localhost:8082/projets";

  constructor(private http: HttpClient) { }

  public getAllProjets(): Observable<Projet[]> {

    return this.http.get<Projet[]>(this.url_projet);
  }

  public getProjetById(id: number): Observable<Projet> {

    const url=`${this.url_projet}/${id}`;
    return this.http.get<Projet>(url);
  }

  public addProjet(projet: Projet): Observable<Projet>{

    return this.http.post<Projet>(this.url_projet, projet);
  }

  public updateProjet(id: number, projet: Projet): Observable<Projet> {

    const url=`${this.url_projet}/${id}`;
    return this.http.put<Projet>(url, projet);
  }

  public deleteProjet(id: number): Observable<{}> {
    const url=`${this.url_projet}/${id}`;
    return this.http.delete<{}>(url);
  }
}
