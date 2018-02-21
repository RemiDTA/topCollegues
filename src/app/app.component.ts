import { Component } from '@angular/core';
import { Collegue } from './shared/domain/Collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CollegueService } from './shared/service/collegue.service';
import { VotreDernierAvisComponent } from './votre-dernier-avis/votre-dernier-avis.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public insertion = false;
  public nouveau: string;
  public co: boolean;

  constructor(public cs: CollegueService) {
  }
  ngOnInit() {
    this.cs.testConnexion().subscribe(result=>this.co=result);
  }
  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement, e) {
    e.preventDefault();
    let newCollegue = new Collegue(pseudo.value, imageUrl.value);
    this.cs.sauvegarder(newCollegue).subscribe();


    // vider les champs de saisie
    this.insertion = true;
    this.nouveau = pseudo.value;
    pseudo.value = '';
    imageUrl.value = '';
    return false; // pour éviter le rechargement de la page
  }

}