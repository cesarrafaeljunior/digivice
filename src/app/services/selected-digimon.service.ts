import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { iDigimon } from '../digimon-list/digimon-list.component';
import { DigimonService } from './digimon.service';

@Injectable({
  providedIn: 'root',
})
export class SelectedDigimonService {
  private selectedDigimonSubject = new BehaviorSubject<iDigimon | null>(null);
  private selectedIndexSubject = new BehaviorSubject<number>(0);

  selectedDigimon$ = this.selectedDigimonSubject.asObservable();
  selectedIndex$ = this.selectedIndexSubject.asObservable();
  private digimons: iDigimon[] = [];
  private currentIndex = -1;

  constructor(private digimonService: DigimonService) {
    this.digimonService.getAllDigimons().subscribe((response: iDigimon[]) => {
      this.digimons = response;
    });
  }

  setSelectedDigimon(digimon: iDigimon) {
    this.selectedDigimonSubject.next(digimon);
  }

  navigateToNext() {
    if (this.currentIndex >= -1) {
      if (this.currentIndex >= this.digimons.length - 1) {
        this.currentIndex = -1;
      }
      this.currentIndex++;
      this.selectedDigimonSubject.next(this.digimons[this.currentIndex]);
    }
  }

  navigateToPrevious() {
    if (this.currentIndex <= this.digimons.length) {
      if (this.currentIndex <= 0) {
        this.currentIndex = this.digimons.length;
      }
      this.currentIndex--;
      this.selectedDigimonSubject.next(this.digimons[this.currentIndex]);
    }
  }
}
