import { detailEquipe } from "./detailEquipe";
import { niveau } from "./enum/niveau";
import { Etudiant } from "./etudiant";

export class equipe{
    idEquipe:number;
    nomEquipe:String;
    score:number;
    responsable:number;
    niveau:niveau;
    detailEquipe:detailEquipe;
    etudiants:Etudiant[];   
}