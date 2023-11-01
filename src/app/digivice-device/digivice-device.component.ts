import { Component, OnInit } from '@angular/core';
import { SelectedDigimonService } from '../services/selected-digimon.service';
import { iDigimon } from '../digimon-list/digimon-list.component';

@Component({
  selector: 'app-digivice-device',
  templateUrl: './digivice-device.component.html',
  styleUrls: ['./digivice-device.component.css'],
})
export class DigiviceDeviceComponent implements OnInit {
  selectedDigimon: iDigimon | null = null;
  isOpen: boolean = false;

  constructor(private selectedDigimonService: SelectedDigimonService) {}

  ngOnInit() {
    this.selectedDigimonService.selectedDigimon$.subscribe((digimonList$) => {
      this.selectedDigimon = digimonList$;
    });

    this.selectedDigimonService.selectedInformation$.subscribe((isOpen$) => {
      this.isOpen = isOpen$;
    });
  }

  clickToNextDigimon() {
    this.selectedDigimonService.navigateToNext();
  }

  clickToPreviousDigimon() {
    this.selectedDigimonService.navigateToPrevious();
  }

  clickShowInformations() {
    this.selectedDigimonService.showInformations(this.isOpen);
  }
}
