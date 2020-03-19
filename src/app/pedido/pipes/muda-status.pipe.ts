import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mudaStatus'
})
export class MudaStatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if (value == 0)
      return 'Em preparação.'
    if (value == 1)
      return 'Saiu para entrega.'
    if (value == 2)
      return 'Entregue.';
  }

}
