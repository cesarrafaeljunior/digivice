import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../services/digimon.service';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';

export interface iDigimon {
  name: string;
  img: string;
  level: string;
}

@Component({
  selector: 'app-digimon-list',
  templateUrl: './digimon-list.component.html',
  styleUrls: ['./digimon-list.component.css'],
})
export class DigimonListComponent implements OnInit {
  digimonList$: Observable<iDigimon[]> = new Observable<iDigimon[]>();
  inputDigimonName: string = '';
  selectLevelDigimon: string = '';
  errorMessage: string = '';

  constructor(private digimonService: DigimonService) {}

  ngOnInit(): void {
    this.digimonList$ = this.digimonService.getAllDigimons().pipe(
      map((response) => {
        return response;
      })
    );
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement | null;

    if (target) {
      const inputValue = target.value;
      this.inputDigimonName = inputValue;
    }
  }

  onSelectChange(event: Event) {
    const target = event.target as HTMLInputElement | null;

    if (target) {
      const selectValue = target.value;
      this.selectLevelDigimon = selectValue;
    }
  }

  searchDigimonByName() {
    this.digimonList$ = this.digimonService
      .getDigimonByName(this.inputDigimonName)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  searchDigimonByLevel() {
    this.digimonList$ = this.digimonService
      .getDigimonByLevel(this.selectLevelDigimon)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  clearFilters() {
    this.digimonList$ = this.digimonService.getAllDigimons().pipe(
      map((response) => {
        return response;
      })
    );
  }
}
