import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contrat } from 'src/app/Core/models/contrat';
import { ContratService } from 'src/app/Core/services/contrat.service';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {

  listContrat:Contrat[];
  IdContratToDelete:number;
  constructor(private route:Router,private ContratServ:ContratService) { }

  ngOnInit(): void {
    this.getAllContrat();
  }

//////routage 
  GoToAddContrat()
  {
    this.route.navigate(['etudiant/AddContrat']);
  }

  updateContrat()
  {
   
  }
 //////////

getAllContrat()
{
  this.ContratServ.getAllContrat().subscribe((data)=>this.listContrat=data);
}


getIdContratToDelete(id:number)
{
this.IdContratToDelete=id;
}

deleteContrat()
{
  this.ContratServ.deleteContrat(this.IdContratToDelete).subscribe(() =>this.getAllContrat());
}
}
