import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../services/digimon.service';
import { Observable, map } from 'rxjs';

interface DigimonList {
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
  digimonList$: Observable<DigimonList[]> = new Observable<DigimonList[]>();

  constructor(private digimonService: DigimonService) {}

  ngOnInit(): void {
    this.digimonList$ = this.digimonService.getAllDigimons().pipe(
      map((response) => {
        return response;
      })
    );
  }
}
