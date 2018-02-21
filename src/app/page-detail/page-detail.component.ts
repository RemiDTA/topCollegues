import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/Collegue';


@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {
  public nom: string;
  public collegue: Collegue = new Collegue("", "")
  public collegues: Collegue[];
  public co: boolean;

  constructor(private route: ActivatedRoute, public cs: CollegueService) {
  }

  ngOnInit() {
    // récupération du paramètre pseudo
    this.route.params.subscribe(params => this.nom = params['nom']);
    this.cs.trouverUnCollegue(this.nom).subscribe(resultat=>this.collegue=resultat,
    erreur=> console.log(erreur));
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

