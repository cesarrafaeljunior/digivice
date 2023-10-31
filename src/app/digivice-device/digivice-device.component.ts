import { Component } from '@angular/core';
import { SelectedDigimonService } from '../services/selected-digimon.service';
import { iDigimon } from '../digimon-list/digimon-list.component';
import { DigimonService } from '../services/digimon.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-digivice-device',
  templateUrl: './digivice-device.component.html',
  styleUrls: ['./digivice-device.component.css'],
})
export class DigiviceDeviceComponent {
  selectedDigimon: iDigimon | null = null;

  constructor(
    private digimonService: DigimonService,
    private selectedDigimonService: SelectedDigimonService
  ) {}

  ngOnInit() {
    this.selectedDigimonService.selectedDigimon$.subscribe((digimonList$) => {
      this.selectedDigimon = digimonList$;
    });
  }
}
