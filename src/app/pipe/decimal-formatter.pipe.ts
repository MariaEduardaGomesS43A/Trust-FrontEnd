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

export class CelularBrPipe implements PipeTransform {

  transform(value: string): string | null {
    if (!value) return null;
    
    // Remove todos os caracteres não numéricos
    const celular = value.replace(/\D/g, '');
    
    // Verifica se o número de celular tem o tamanho correto
    if (celular.length === 11) {
      // Formata o número conforme o padrão (XX) XXXXX-XXXX
      return `(${celular.substring(0, 2)}) ${celular.substring(2, 7)}-${celular.substring(7, 11)}`;
    }

    return value;  // Se o número não tiver 11 dígitos, retorna o valor original
  }
}

