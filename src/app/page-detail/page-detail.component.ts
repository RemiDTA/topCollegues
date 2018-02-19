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
  public collegue: Collegue = new Collegue("","")
  constructor(private route: ActivatedRoute, public cs: CollegueService) {
  }

  ngOnInit() {
     // récupération du paramètre pseudo
    this.route.params.subscribe(params => { this.nom = params['nom']; });
    this.cs.trouverUnCollegue(this.nom).then(col =>   this.collegue = col)
  }

}

