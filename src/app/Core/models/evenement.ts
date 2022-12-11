import { club } from "./club";
import { equipe } from "./equipe";

export class evenement {
idEvenement:number;
nomEvenement:string;
dateEvenement:Date;
emplacementEvenement:string;
club:club;
equipes:equipe[];
}