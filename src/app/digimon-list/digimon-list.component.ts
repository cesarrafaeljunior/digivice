import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../services/digimon.service';
import { Observable, map } from 'rxjs';

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

  constructor(private digimonService: DigimonService) {}

  ngOnInit(): void {
    this.digimonList$ = this.digimonService.getAllDigimons().pipe(
      map((response) => {
        return response;
      })
    );
  }
}
