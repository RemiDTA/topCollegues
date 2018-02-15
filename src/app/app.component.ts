import { Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public collegues : Collegue[];
  public insertion = false;
  public nouveau : string;
  ngOnInit() {
    this.collegues = [new Collegue("Bernard", "http://resize3-parismatch.ladmedia.fr/img/var/news/storage/images/paris-match/actu/societe/garde-a-vue-pour-bernard-tapie-519488/4699525-1-fre-FR/Garde-a-vue-pour-Bernard-Tapie.jpg"), 
    new Collegue("Jean michel","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpeCFnI_2XAzRw-2t8iJMddeKHhCtvxMXZ8IdZqo4cCNaLjEC"),
    new Collegue("Sarah(pelle)","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmwrafBhT1IhMe6bfm598qAplT7q2dNp0yrHps-cjScC_Kijo"),
    new Collegue("Beatrice","http://images.lpcdn.ca/641x427/201603/07/1152258-beatrice-dalle-devrait-bientot-installer.jpg"),
    new Collegue("le pape","https://img.20mn.fr/4aqEpPRXS5KrGck4-cdTRg/310x190_le-pape-franois-au-vatican-le-27-avril-2016")];
    
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