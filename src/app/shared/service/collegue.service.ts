import { Injectable } from '@angular/core';
import { Collegue } from '../domain/Collegue';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";


@Injectable()
export class CollegueService {

  private subjectSauvegarde: Subject<Collegue> = new Subject();

  get collegueSaveObs(): Observable<Collegue> {
    return this.subjectSauvegarde.asObservable();
  }

  constructor(private _http: HttpClient) { }

  listerCollegues(): Observable<Collegue[]> {
    let req = this._http.get<Collegue[]>('http://localhost:8080/collegues');

    return req;

  }
  /*
    trouverUnCollegue(nom:string): Collegue {
      return this.listerCollegues().subscribe(resultat => resultat.filter(ele => ele.pseudo == nom)[0]));
    } 
  */

  sauvegarder(newCollegue: Collegue): Observable<Collegue> {

    // sauvegarder le nouveau collègue côté serveur
    let req = this._http.post<Collegue>('http://localhost:8080/collegues', newCollegue);
    req.subscribe(resultat => this.subjectSauvegarde.next(newCollegue),
      erreur => console.log(erreur));
    return this.subjectSauvegarde;

  }

  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    // TODO Aimer un collègue côté serveur
    let req = this._http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.pseudo, { "action": "aimer" });
    return req;
  }
  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    // TODO Détester un collègue côté serveur
    let req = this._http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.pseudo, { "action": "detester" });
    return req;
  }

}