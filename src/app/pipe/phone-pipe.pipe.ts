import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe',
  standalone: true
})
export class PhonePipePipe implements PipeTransform {

  transform(value: string): string | null {
    if (!value) return null;
    
    const celular = value.replace(/\D/g, '');
    
    if (celular.length === 11) {
      return `(${celular.substring(0, 2)}) ${celular.substring(2, 7)}-${celular.substring(7, 11)}`;
    }

    return value;  
  }
}
