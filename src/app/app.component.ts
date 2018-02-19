import { Component } from '@angular/core';
import { Collegue } from './shared/domain/Collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CollegueService } from './shared/service/collegue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public insertion=false;
  public nouveau: string;
  constructor(public cs: CollegueService) {
  }
  ngOnInit() {
  }
  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement, e) {
    e.preventDefault();
    let newCollegue = new Collegue(pseudo.value, imageUrl.value);
    this.cs.sauvegarder(newCollegue);

    // vider les champs de saisie
    this.insertion=true;
    this.nouveau=pseudo.value;
    pseudo.value = '';
    imageUrl.value = '';
    return false; // pour éviter le rechargement de la page
  }

}