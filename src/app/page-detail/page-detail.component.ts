import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/Collegue';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Commentaire } from '../shared/domain/Commentaire';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css'],
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
export class PageDetailComponent implements OnInit {
  public nom: string;
  public collegue: Collegue = new Collegue("", "")
  public collegues: Collegue[];
  public co: boolean;
  public closeResult: string;
  //le nouveau com
  public commentaire: string;
  public activBtn: boolean;
  //la liste des comm du collegue
  public coms: Commentaire[];

  constructor(private route: ActivatedRoute, public cs: CollegueService, private modalService: NgbModal) {
  }

  ngOnInit() {
    // récupération du paramètre pseudo
    this.route.params.subscribe(params => this.nom = params['nom']);

    //Initialisation des différents champs
    this.cs.trouverUnCollegue(this.nom).subscribe(resultat=>{this.collegue=resultat;
      this.cs.listerCommentaires(this.collegue).subscribe(resultat=>this.coms=resultat,erreur=>console.log(erreur))},
    erreur=> console.log(erreur));

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

