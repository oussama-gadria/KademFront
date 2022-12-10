import { detailEquipe } from "./detailEquipe";
import { niveau } from "./enum/niveau";

export class equipe{
    idEquipe:number;
    nomEquipe:String;
    score:number;
    responsable:number;
    niveau:niveau;
    detailEquipe:detailEquipe;   
}