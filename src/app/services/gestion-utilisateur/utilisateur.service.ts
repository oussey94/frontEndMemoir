import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  public readonly url_user: string = "http://localhost:8089/users";

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(this.url_user);
  }

  public getUserById(id: number): Observable<Utilisateur>{
    const url = `${this.url_user}/${id}`;
    return this.http.get<Utilisateur>(url);
  }

  public addUser(utilisateur: Utilisateur): Observable<Utilisateur>{
    return this.http.post<Utilisateur>(this.url_user, utilisateur);
  }

  public updateUser(id: number, utilisateur: Utilisateur): Observable<Utilisateur>{
    const url= `${this.url_user}/${id}`;
    return this.http.put<Utilisateur>(url, utilisateur);
  }

  public deleteUser(id: number): Observable<{}>{
    const url= `${this.url_user}/${id}`;
    return this.http.delete<{}>(url);
  }
}
