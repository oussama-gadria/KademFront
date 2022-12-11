import { club } from "./club";
import { Contrat } from "./contrat";
import { Departement } from "./departement";
import { Option } from "./enum/option";
import { equipe } from "./equipe";

export class Etudiant
{
   idEtudiant:number;
   nomE:String;
   prenomE:String;
   email:String;
   numeroTelephone:string;
   adresse:String;
   age:String;
   niveauEtudiant:number;
   option:Option
   classe:number;
   moyenneE:number;
   contrats:Contrat[];
   equipes:equipe[];
   departement:Departement;
   clubs:club[];


}