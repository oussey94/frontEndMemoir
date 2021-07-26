import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from '../model/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationsService {

  public readonly url_reclamations: string = 'http://localhost:8088/reclamations';

  constructor(private http: HttpClient) { }

  public getAllReclamations(): Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.url_reclamations);
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
