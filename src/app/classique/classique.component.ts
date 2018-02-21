import { Component, Input } from '@angular/core';
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
  public tri: string;
  public co: boolean;

  constructor(public cs: CollegueService) {
  }
  ngOnInit() {
    this.cs.listerCollegues().subscribe(
      resultat => this.collegues = resultat,
      erreur => console.log(erreur));

    this.cs.collegueSaveObs.subscribe(col=>
        this.collegues.push(col),
    erreur=> console.log(erreur))

    this.cs.testConnexion().subscribe(result=>this.co=result);

  }
  limiter(nombre: HTMLInputElement) {
    this.limite = +nombre.value;
    return false; // pour éviter le rechargement de la page
  }
  filtrerPseudo(pseudo: HTMLInputElement) {
    this.tri= pseudo.value;
    return false; // pour éviter le rechargement de la page
  }
}