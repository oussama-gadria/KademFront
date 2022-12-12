import { Etudiant } from "./etudiant";
import { evenement } from "./evenement";

export class club {
    idClub:number;
    nomClub:string;
    evenements:evenement[];
    etudiantsclub:Etudiant[];
    responsableClub:Etudiant;
    
}