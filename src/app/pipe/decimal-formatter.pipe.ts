import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalFormatter',
  standalone: true
})
export class DecimalFormatterPipe implements PipeTransform {


  transform(value: number): string {
    if (isNaN(value)) return '0.00';
    return value.toFixed(2); // Formata o valor com duas casas decimais
  }

}
