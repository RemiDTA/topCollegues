import { Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CollegueService } from './shared/service/collegue.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public collegues : Collegue[];
  public insertion : boolean
  public nouveau : string
  constructor( public cs : CollegueService){
  }
  ngOnInit() {
    this.insertion = false
    this.cs.listerCollegues().then(
    resultat =>  this.collegues = resultat,
    erreur => console.log(erreur));
    
  }
  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {

    this.collegues.push(new Collegue(pseudo.value, imageUrl.value));
    // TODO vider les champs de saisie
    this.insertion=true;
    this.nouveau= pseudo.value;
    pseudo.value='';   
    imageUrl.value='';   
    return false; // pour éviter le rechargement de la page
    }
}