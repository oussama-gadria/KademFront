import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/Core/models/etudiant';
import { EtudiantService } from 'src/app/Core/services/etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
  listEtudiant:Etudiant[];
  IdEtudiantToDelete:number;
  searchEtudiant:string=""
  constructor(private route:Router, private etudiantServ:EtudiantService) { }

  ngOnInit(): void {
  this.getAllEtudiant();
  }


  ///////////routage 
  GoToAddEtudiant()
  {
    this.route.navigate(['etudiant/AddEtudiant']);
  }
  GoToAddContrat(id:number)
  {
    this.route.navigate(['etudiant/AddContrat',id]);
  }
  GoToUpdateEtudiant(id:number)
  {
    this.route.navigate(['etudiant/UpdateEtudiant',id])
  }
/////////////////

search() 
  { 
    return this.listEtudiant.filter(etudiant=> { 
      return etudiant.prenomE.includes(this.searchEtudiant);
    })
  }

getAllEtudiant()
{
  this.etudiantServ.getAllEtudiant().subscribe((data)=>this.listEtudiant=data);
}

getIdEtudiantToDelete(id:number)
{
this.IdEtudiantToDelete=id;
}


deleteEtudiant()
{
  this.etudiantServ.deleteEtudiant(this.IdEtudiantToDelete).subscribe(() =>this.getAllEtudiant())
}
}
