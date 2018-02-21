import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Collegue } from '../shared/domain/Collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CollegueService } from '../shared/service/collegue.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Commentaire } from '../shared/domain/Commentaire';



@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;   
    }
  `]
})
export class CarousselComponent implements OnInit {
  public collegues: Collegue[];
  public co: boolean;
  public closeResult: string;
  public commentaire: string;
  public activBtn: boolean;

  constructor(public cs: CollegueService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.cs.listerCollegues().subscribe(
      resultat => this.collegues = resultat,
      erreur => console.log(erreur));

    this.cs.collegueSaveObs.subscribe(col =>
      this.collegues.push(col),
      erreur => console.log(erreur))

      this.cs.testConnexion().subscribe(result=>this.co=result);

  }

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
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
  filtrerCom(){
    
    if (this.commentaire.length>10)
    {
      this.activBtn=true;
    }
    else
    {
      this.activBtn=false;
    }
  }
  submit(col : Collegue) {
      let com : Commentaire = new Commentaire(col, this.commentaire);
      this.cs.sauvegarderCom(com).subscribe(result =>result,erreur =>alert("Ceci est une erreur tres explicite : regarde en haut a droite mon coco"));
    }
}
