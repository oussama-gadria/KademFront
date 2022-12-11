import { BLOC } from "./enum/BLOC";
import { Etudiant } from "./etudiant";
import { module } from "./module";

export class Departement {
    idDepart:number;
    nomDepart:string;
    bloc:BLOC;
    modules:module[];
    etudiants:Etudiant[];
}