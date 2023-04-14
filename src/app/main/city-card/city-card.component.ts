import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from 'src/app/model/city.model';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent {

  @Input() city!:City;
  @Output() cityEmiter:EventEmitter<string>=new EventEmitter<string>()

  emitCity()
  {
    this.cityEmiter.emit(this.city.name);

  }
}
