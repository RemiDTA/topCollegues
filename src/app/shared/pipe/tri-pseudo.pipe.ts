import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../domain/Collegue';

@Pipe({
  name: 'triPseudo'
})
export class TriPseudoPipe implements PipeTransform {

  transform(value: Collegue[] = [], pseudo: string) {
    if (pseudo != "")
      return value.filter(ele => { return ele.pseudo.toLowerCase().startsWith(pseudo); });
    else
      return value
  }

}
