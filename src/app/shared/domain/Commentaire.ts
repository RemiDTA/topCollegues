import { Collegue } from "./Collegue";

export class Commentaire {
    
    public id : number;

    constructor(public col : Collegue, public com : string){
    }
}
