import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../../model/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  public readonly url_categorie: string = "http://localhost:8082/categories";

  constructor(private http: HttpClient) { }

  public getAllCategories(): Observable<Categorie[]> {

    return this.http.get<Categorie[]>(this.url_categorie);
  }

  public getCategorieById(id: number): Observable<Categorie> {

    const url= `${this.url_categorie}/${id}`;
    return this.http.get<Categorie>(url);
  }

  public addCategorie(category: Categorie): Observable<Categorie> {

    return this.http.post<Categorie>(this.url_categorie, category);
  }

  public updateCategor(id: number, category: Categorie): Observable<Categorie> {

    const url= `${this.url_categorie}/${id}`;
    return this.http.put<Categorie>(url, category);
  }

  public deleteCategorie(id: number): Observable<{}> {
    
    const url= `${this.url_categorie}/${id}`;
    return this.http.delete<{}>(url);
  }
}
