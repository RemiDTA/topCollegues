import { Injectable } from '@angular/core';
import { Collegue } from '../domain/Collegue';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/map';


@Injectable()
export class CollegueService {

  //On garde les subject avec un droit en lecture uniquement afin qu'il n'y ai que ce service qui puisse modifier 
  private subjectSauvegarde: Subject<Collegue> = new Subject();
  private subjectAvis: Subject<Map<string, Collegue>> = new Subject();
  private subjectConnexion: Subject<boolean> = new Subject();

  get collegueSaveObs(): Observable<Collegue> {
    return this.subjectSauvegarde.asObservable();
  }
  get etatConnexion(): Observable<boolean> {
    return this.subjectConnexion.asObservable();
  }
  get AvisObs(): Observable<Map<string, Collegue>> {
    return this.subjectAvis.asObservable();
  }

  constructor(private _http: HttpClient) { }

  listerCollegues(): Observable<Collegue[]> {
    let req = this._http.get<Collegue[]>('http://localhost:8080/collegues');

    return req;

  }

  //Pour tester la co on envoi une requête si c good on est en ligne sinan hors ligne
  testConnexion(): Observable<boolean> {
    let req = this._http.get<Collegue[]>('http://localhost:8080/collegues').subscribe(
      resultat => this.subjectConnexion.next(true), 
      erreur => this.subjectConnexion.next(false))
    return this.subjectConnexion;
  }


  trouverUnCollegue(nom: string): Observable<Collegue> {

    return this.listerCollegues().map(resultat => resultat.filter(ele => ele.pseudo == nom)[0]);
  }


  sauvegarder(newCollegue: Collegue): Observable<Collegue> {

    // sauvegarder le nouveau collègue côté serveur
    let req = this._http.post<Collegue>('http://localhost:8080/collegues', newCollegue);
    req.subscribe(resultat => this.subjectSauvegarde.next(newCollegue),
      erreur => console.log(erreur));
    return this.subjectSauvegarde;

  }

  aimerUnCollegue(unCollegue: Collegue): Observable<Map<string, Collegue>> {
    // Aimer un collègue côté serveur
    let avis = new Map();
    avis.set("aimer", unCollegue);
    let req = this._http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.pseudo, { "action": "aimer" });
    req.subscribe(resultat => this.subjectAvis.next(avis),
      erreur => console.log(erreur));
    return this.subjectAvis;
  }

  detesterUnCollegue(unCollegue: Collegue): Observable<Map<string, Collegue>> {
    // Détester un collègue côté serveur
    let avis = new Map();
    avis.set("detester", unCollegue);
    let req = this._http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.pseudo, { "action": "detester" });
    req.subscribe(resultat => this.subjectAvis.next(avis),
      erreur => console.log(erreur));
    return this.subjectAvis;
  }

}