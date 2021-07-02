import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visite } from '../model/visite';

@Injectable({
  providedIn: 'root'
})
export class VisitesService {

  public readonly url_visites: string='http://localhost:8088/visites';

  //visites: Visite[];

  constructor(private http: HttpClient) { }

  public listeDesVisites(): Observable<Visite[]>{
    return this.http.get<Visite[]>(this.url_visites);
  }


  public getVisiteParId(id: number): Observable<Visite>{
    const url=`${this.url_visites}/${id}`;

    return this.http.get<Visite>(url);
  }


  public addVisite(visite: Visite): Observable<Visite>{
    return this.http.post<Visite>(this.url_visites, visite);
  }


  public updateVisite(id: number, visite: Visite): Observable<Visite>{
    const url=`${this.url_visites}/${id}`;

    return this.http.put<Visite>(url, visite);
  }

  public deleteVisite(id :number): Observable<{}>{
    const url=`${this.url_visites}/${id}`;
    return this.http.delete<{}>(url);
  }
}
