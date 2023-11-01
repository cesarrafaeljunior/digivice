import { Component, OnInit } from '@angular/core';
import { SelectedDigimonService } from '../services/selected-digimon.service';
import { iDigimon } from '../digimon-list/digimon-list.component';
import { DigimonService } from '../services/digimon.service';

@Component({
  selector: 'app-digivice-device',
  templateUrl: './digivice-device.component.html',
  styleUrls: ['./digivice-device.component.css'],
})
export class DigiviceDeviceComponent implements OnInit {
  selectedDigimon: iDigimon | null = null;

  constructor(private selectedDigimonService: SelectedDigimonService) {}

  ngOnInit() {
    this.selectedDigimonService.selectedDigimon$.subscribe((digimonList$) => {
      this.selectedDigimon = digimonList$;
    });
  }

  clickToNextDigimon() {
    this.selectedDigimonService.navigateToNext();
  }

  clickToPreviousDigimon() {
    this.selectedDigimonService.navigateToPrevious();
  }
}
