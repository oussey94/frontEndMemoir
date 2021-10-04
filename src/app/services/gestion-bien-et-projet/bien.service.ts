import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bien } from '../../model/bien.model';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BienService {

  public readonly bien_url: string = "http://localhost:8082/biens";

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
    const url= `${this.bien_url}/${id}`;
    return this.http.put<Bien>(url, bien);
  }

  public deleteBien(id: number): Observable<{}>{
    const url= `${this.bien_url}/${id}`;
    return this.http.delete<{}>(url);
  }

  public uploadPhotoBien(file: File, id: number): Observable<HttpEvent<{}>>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    const r = new HttpRequest('POST', this.bien_url+'/uploadPhoto/'+id, formData, {
      reportProgress: true,
      responseType: 'text'/*,
      headers : new HttpHeaders({
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST'
      })*/
    });

    return this.http.request(r);
  }
}

//https://www.bezkoder.com/angular-12-file-upload/
//https://nehalist.io/uploading-files-in-angular2/
