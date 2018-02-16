import { Injectable } from '@angular/core';
import { Collegue } from '../domain/Collegue';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class CollegueService {

  constructor(private _http: HttpClient) { }
  listerCollegues(): Promise<Collegue[]> {
    let req = this._http.get<Collegue[]>('http://localhost:8080/collegues');
    return req.toPromise();

  }


  sauvegarder(newCollegue: Collegue): Promise<Collegue> {

    // sauvegarder le nouveau collègue côté serveur
    let req = this._http.post<Collegue>('http://localhost:8080/collegues', newCollegue);
    return req.toPromise();

  }
  
aimerUnCollegue(unCollegue: Collegue): Promise < Collegue > {
    // TODO Aimer un collègue côté serveur
    let req = this._http.patch<Collegue>('http://localhost:8080/collegues/' +unCollegue.pseudo, { "action" : "aimer" });
    return req.toPromise();
}
detesterUnCollegue(unCollegue: Collegue): Promise < Collegue > {
    // TODO Détester un collègue côté serveur
     let req = this._http.patch<Collegue>('http://localhost:8080/collegues/' +unCollegue.pseudo, { "action" : "detester" });
    return req.toPromise();
  }

}