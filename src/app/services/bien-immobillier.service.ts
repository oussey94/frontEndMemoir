import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Bien } from '../model/bien.model';

@Injectable({
  providedIn: 'root'
})
export class BienImmobillierService {

  private readonly biens_url="api/bienss";

  constructor(private http: HttpClient) { }

  public getBiensImmo(): Observable <Bien[]>{
    return this.http.get<Bien[]>(this.biens_url).pipe(
                          //tap(biens => console.log("biens: ", biens)),
      catchError(this.handleError)
    ); 
  }

  public getBienById(id: number): Observable<Bien>{
    const url= `${this.biens_url}/${id}`;
    if(id === 0) {
      return of(this.getDefaultBien());
    }
    return this.http.get<Bien>(url).pipe(catchError(this.handleError));        //.getBiensImmo().pipe(map(biens => biens.find(bien => bien.id ==id)));
  }

  public createBien(bien: Bien): Observable<Bien> {
    bien = {
      ...bien,
      imageUrl: 'assets/img/hotel-room.jpeg',
      id: null,
    }
    return this.http.post<Bien>(this.biens_url, bien).pipe(catchError(this.handleError));
  }

  public updateBien(bien: Bien): Observable<Bien> {
    const url = `${this.biens_url}/${bien.id}`;
    return this.http.put<Bien>(url, bien).pipe(catchError(this.handleError));
  }

  public deleteBien(id: number): Observable<{}> {
    const url= `${this.biens_url}/${id}`;
    return this.http.delete<{}>(url).pipe(catchError(this.handleError));
  }

  private getDefaultBien(): Bien {
    return {
      id: 0,
      hotelName: null,
      description: null,
      price: null,
      rating: null,
      imageUrl: null,
      projet: null,
      categorie: null,
      proprietaire: null
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
