import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep',
  standalone: true
})
export class CepPipe implements PipeTransform {

  transform(value: string): string | null {
    if (!value) return null;

    // Remove qualquer caractere não numérico
    const cep = value.replace(/\D/g, '');

    // Verifica se o CEP tem 8 dígitos
    if (cep.length === 8) {
      // Formata o CEP no formato XXXXX-XXX
      return `${cep.substring(0, 5)}-${cep.substring(5, 8)}`;
    }

    return value;  // Se o CEP não tiver 8 dígitos, retorna o valor original
  }

}
