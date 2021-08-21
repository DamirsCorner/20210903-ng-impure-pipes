import { Pipe, PipeTransform } from '@angular/core';
import { ValueWithUnit } from './models';

@Pipe({
  name: 'formatValue',
  pure: false,
})
export class FormatValuePipe implements PipeTransform {
  private formattedValue: string = '';
  private latestValue: number | undefined;
  private latestUnit: string | undefined;

  transform(value: ValueWithUnit): string {
    if (this.latestValue == value.value && this.latestUnit == value.unit) {
      console.log('cached');
      return this.formattedValue;
    }

    this.latestValue = value.value;
    this.latestUnit = value.unit;
    this.formattedValue = `${value.value} ${value.unit}`;

    console.log('changed');
    return this.formattedValue;
  }
}
