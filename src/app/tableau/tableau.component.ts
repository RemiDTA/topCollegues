import { Component, Input } from '@angular/core';
import { Collegue } from '../shared/domain/Collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  public collegues: Collegue[];
  public co: boolean;

  constructor(public cs: CollegueService) {
  }
  ngOnInit() {
    this.cs.listerCollegues().subscribe(
      resultat => this.collegues = resultat,
      erreur => console.log(erreur));

    this.cs.collegueSaveObs.subscribe(col =>
      this.collegues.push(col),
      erreur => console.log(erreur))
      this.cs.testConnexion().subscribe(result=>this.co=result);
  }
  jaime(collegue: Collegue) {
    // événement clic sur le bouton "J'aime"
    // => le score du collègue est augmenté de 10
    this.cs.aimerUnCollegue(collegue);
  }
  jedeteste(collegue: Collegue) {
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
    this.cs.detesterUnCollegue(collegue);

  }
}