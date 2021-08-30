import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bien } from '../model/bien.model';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  public readonly bien_url: string = "http://localhost:9999/GESTION-BIENS-ET-PROJET/biens";

  constructor(private http: HttpClient) { }

  public getAllBiens(): Observable<Bien[]>{
    return this.http.get<Bien[]>(this.bien_url);
  }

  public getBienById(id: number): Observable<Bien>{
    const url = `${this.bien_url}/${id}`;
    return this.http.get<Bien>(url);
  }

  public addBien(bien: Bien): Observable<Bien>{
    return this.http.post<Bien>(this.bien_url, bien);
  }

  public updateBien(id: number, bien: Bien): Observable<Bien>{
    const url= `${this.bien_url}/${id}`
    return this.http.put<Bien>(url, bien);
  }

  public deleteBien(id: number): Observable<{}>{
    const url= `${this.bien_url}/${id}`
    return this.http.delete<{}>(url);
  }
}
