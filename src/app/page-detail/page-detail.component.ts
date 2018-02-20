import { Component, OnInit } from '@angular/core';
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
    this.route.params.subscribe(params => { this.nom = params['nom']; });
    this.cs.trouverUnCollegue(this.nom).subscribe(resultat=>this.collegue=resultat,
    erreur=> console.log(erreur));

    //this.testerCo();

  }
  testerCo() {
    this.cs.testConnexion().subscribe(result => this.co = result);
    setTimeout(() => this.ngOnInit(), 5000);
    this.testerCo();
  }
}

