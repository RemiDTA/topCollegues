import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../shared/domain/Collegue';
import { AppComponent } from '../app.component';
import { CollegueService } from '../shared/service/collegue.service';


@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css'],
  
})

export class UnCollegueComponent implements OnInit {
  //Creation d'un event qui se propage au moment de la maj d'un score merci @lucas
  @Output() majScore: EventEmitter<void> = new EventEmitter<void>()
  // paramètre d'entrée "collegue"
  @Input() collegue: Collegue;
  constructor(public cs: CollegueService) { }
  ngOnInit() {
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