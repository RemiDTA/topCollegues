import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/Collegue';


@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})
export class VotreDernierAvisComponent implements OnInit {
  public avis: string;
  public col: Collegue;
  public insertion = false;
  constructor(public cs: CollegueService) { }

  ngOnInit() {
    this.cs.AvisObs.subscribe(resultat => {
      resultat.forEach((value: Collegue, key: string) => {
        this.avis = key;
        this.col = value;
      });
    },
      erreur => console.log(erreur));
  }

}
