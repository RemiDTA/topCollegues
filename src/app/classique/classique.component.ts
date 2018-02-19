import { Component } from '@angular/core';
import { Collegue } from '../shared/domain/Collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-classique',
  templateUrl: './classique.component.html',
  styleUrls: ['./classique.component.css']
})
export class ClassiqueComponent implements OnInit {
  public collegues: Collegue[];
  public limite: number;

  constructor(public cs: CollegueService) {
  }
  ngOnInit() {
    this.cs.listerCollegues().then(
      resultat => this.collegues = resultat,
      erreur => console.log(erreur));

  }
  limiter(nombre: HTMLInputElement) {
    this.limite = +nombre.value;
    return false; // pour éviter le rechargement de la page
  }

}