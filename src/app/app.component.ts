import { Component } from '@angular/core';
import { ValueWithUnit } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public value: ValueWithUnit = {
    value: 25,
    unit: '°C',
  };
}
