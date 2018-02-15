import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { AppComponent } from '../app.component';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})

export class UnCollegueComponent implements OnInit {
  // paramètre d'entrée "collegue"
  @Input() collegue:Collegue;
  constructor(private _cs : CollegueService) { }
  ngOnInit() {
  }
  jaime(collegue : Collegue) {
  // événement clic sur le bouton "J'aime"
  // => le score du collègue est augmenté de 10
    collegue.score+=10;
  }
  jedeteste(collegue : Collegue) {
  // événement clic sur le bouton "Je déteste"
  // => le score du collègue est diminué de 5
  collegue.score-=5;
 
  }
  }