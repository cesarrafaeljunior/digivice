import { Component, Input } from '@angular/core';
import { DigimonService } from '../services/digimon.service';
import { SelectedDigimonService } from '../services/selected-digimon.service';
import { iDigimon } from '../digimon-list/digimon-list.component';

@Component({
  selector: 'app-digimon-card',
  templateUrl: './digimon-card.component.html',
  styleUrls: ['./digimon-card.component.css'],
})
export class DigimonCardComponent {
  @Input() digimonData: any;
  @Input() index:any

  constructor(private selectedDigimonService: SelectedDigimonService) {}

  public onCardClick(digimon: iDigimon) {
    this.selectedDigimonService.setSelectedDigimon(digimon,this.index);
  }
}
