import { Pipe, PipeTransform } from '@angular/core';
import { ValueWithUnit } from './models';

@Pipe({
  name: 'formatValue',
  pure: false,
})
export class FormatValuePipe implements PipeTransform {
  transform(value: ValueWithUnit): string {
    return `${value.value} ${value.unit}`;
  }
}
