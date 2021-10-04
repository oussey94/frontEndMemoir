import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etat } from '../../model/etat';

@Injectable({
  providedIn: 'root'
})
export class EtatsService {

  public readonly url_etats: string = 'http://localhost:8088/etats';

  constructor(private http: HttpClient) { }

  public getAllEtats(): Observable<Etat[]>{
    return this.http.get<Etat[]>(this.url_etats);
  }

  public getEtatById(id: number): Observable<Etat>{
    const url = `${this.url_etats}/${id}`;
    return this.http.get<Etat>(url);
  }

  public getEtatByName(etat: Etat): Observable<Etat>{
    const url = `${this.url_etats}/${etat.nomEtat}`;
    return this.http.get<Etat>(url);
  }

  public addEtat(etat: Etat): Observable<Etat>{
    return this.http.post<Etat>(this.url_etats, etat);
  }

  public updateEtat(id: number, etat: Etat): Observable<Etat>{
    const url= `${this.url_etats}/${id}`
    return this.http.put<Etat>(url, etat);
  }

  public deleteEtat(id: number): Observable<{}>{
    const url= `${this.url_etats}/${id}`
    return this.http.delete<{}>(url);
  }

}
