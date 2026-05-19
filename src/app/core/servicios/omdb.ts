import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Omdb {
   constructor(private http: HttpClient) {}

  BuscarPelicula(title: string, type?: string, year?: string): Observable<any> {
    let params = new HttpParams()
      .set('apikey', environment.llave)
      .set('s', title);

    if (type) params = params.set('type', type);
    if (year) params = params.set('y', year);

    return this.http.get(environment.Url, { params });
  }

  ObtenerdetallePelicula(imdbID: string): Observable<any> {
    const params = new HttpParams()
      .set('apikey', environment.llave)
      .set('i', imdbID)
      .set('plot', 'short');

    return this.http.get(environment.Url, { params });
  }
}
