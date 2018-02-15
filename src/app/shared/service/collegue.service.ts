import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class CollegueService{
  
  constructor(private _http : HttpClient) { }
  listerCollegues():Promise<Collegue[]> {
      let collegues=this._http.get<Collegue[]>('http://localhost:8080/collegues');
      console.log(collegues);
      
      return this._http.get<Collegue[]>('http://localhost:8080/collegues').toPromise()

    }
    /*
sauvegarder(newCollegue: Collegue): Promise < Collegue > {
        // TODO sauvegarder le nouveau collègue côté serveur

      }
aimerUnCollegue(unCollegue: Collegue): Promise < Collegue > {
        // TODO Aimer un collègue côté serveur
      }
detesterUnCollegue(unCollegue: Collegue): Promise < Collegue > {
        // TODO Détester un collègue côté serveur
      }*/

}