import { Departement } from "./departement";
import { Enseignant } from "./enseignant";

export class module{
    idModule:number;
    nomModule:string;
    nbrMatieres:number;
    departement:Departement;
    listEnseignant:Enseignant[];
}