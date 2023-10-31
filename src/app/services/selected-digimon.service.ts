import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { iDigimon } from '../digimon-list/digimon-list.component';

@Injectable({
  providedIn: 'root',
})
export class SelectedDigimonService {
  private selectedDigimonSubject = new BehaviorSubject<iDigimon | null>(null);

  selectedDigimon$ = this.selectedDigimonSubject.asObservable();

  setSelectedDigimon(digimon: iDigimon) {
    this.selectedDigimonSubject.next(digimon);
  }
}
