import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../shared/service/collegue.service';
import { reject } from 'q';
import { Collegue } from '../shared/domain/Collegue';


@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {
  public nom: string;
  constructor(private route: ActivatedRoute, public cs: CollegueService) {
    // récupération du paramètre pseudo
    route.params.subscribe(params => { this.nom = params['nom']; });
  }

  ngOnInit() {
  }
  chercherCollegue(nom: string) {
    let collegue = this.cs.listerCollegues().
      then(
        listcol => listcol.filter(ele => ele.pseudo == nom),
        erreur => console.log(erreur))
        return collegue
  }
}

