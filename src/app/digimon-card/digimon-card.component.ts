import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-digimon-card',
  templateUrl: './digimon-card.component.html',
  styleUrls: ['./digimon-card.component.css']
})
export class DigimonCardComponent {
  @Input() digimonData: any
}
