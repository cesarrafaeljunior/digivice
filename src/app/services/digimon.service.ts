import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DigimonService {
  private apiUrl = 'https://digimon-api.vercel.app/api/digimon';

  constructor(private httpClient: HttpClient) {}

  getAllDigimons(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
}
