import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { iDigimon } from '../digimon-list/digimon-list.component';

@Injectable({
  providedIn: 'root',
})
export class DigimonService {
  private apiUrl = 'https://digimon-api.vercel.app/api/digimon';

  constructor(private httpClient: HttpClient) {}

  getAllDigimons(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  getDigimonByName(name: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/name/${name}`).pipe(
      catchError((response) => {
        console.log(response.error)
        return this.getAllDigimons();
      })
    );
  }

  getDigimonByLevel(level: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/level/${level}`).pipe(
      catchError((response) => {
        console.log(response.error)
        return this.getAllDigimons();
      })
    );
  }
}
