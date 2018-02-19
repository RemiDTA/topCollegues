import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../domain/Collegue';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number) {
    if (value > 0) {
      return "<p class='text-success font-weight-bold'>+ " + Math.abs(value)+ "</p>";;
    }
    else if (value<0) {
      return "<p class='text-danger font-weight-bold'>- " + Math.abs(value)+ "</p>";
    }
    else {
      return "<p class='text-danger font-weight-bold'>" + value + "</p>";
    }
  }

}
