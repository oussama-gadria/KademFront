import { equipe } from "./equipe";
import { module } from "./module";

export class Enseignant{ 
    idEnseignant:number;
    nomEnseignant:string;
    prenomEnseignant:string;
    nomMatiere:string;
    email:string;
    age:number;
    salaire:number;
    experienceParAnnee:number; 
    module:module[];
}