import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Collegue } from '../shared/domain/Collegue';
import { AppComponent } from '../app.component';
import { CollegueService } from '../shared/service/collegue.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Commentaire } from '../shared/domain/Commentaire';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css'],
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

export class UnCollegueComponent implements OnInit {
  // paramètre d'entrée "collegue"
  @Input() collegue: Collegue;
  public co: boolean;
  public closeResult: string;
  public commentaire: string;
  public activBtn: boolean;

  constructor(public cs: CollegueService, private modalService: NgbModal) { }
  ngOnInit() {
    this.cs.testConnexion().subscribe(result=>this.co=result);
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
  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
  submit(col : Collegue) {
      let com : Commentaire = new Commentaire(col, this.commentaire);
      this.cs.sauvegarderCom(com).subscribe(result =>result,erreur =>alert("Ceci est une erreur tres explicite : regarde en haut a droite mon coco"));
    }
}