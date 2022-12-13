
import { Router } from '@angular/router';
import { Contrat } from 'src/app/Core/models/contrat';
import { ContratService } from 'src/app/Core/services/contrat.service';
import { UpdateContratComponent } from '../update-contrat/update-contrat.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { specialite } from 'src/app/Core/models/enum/specialite';
@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {

  listContrat:Contrat[];
  IdContratToDelete:number;
  idContrat:number;
 
  constructor(private route:Router,private ContratServ:ContratService) { }
  @ViewChild(UpdateContratComponent) private childUpadateComponent:UpdateContratComponent;


  
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

initTochild(contrat:Contrat){
  this.childUpadateComponent.initFormUpdateContrat(contrat);
  this.idContrat=contrat.idContrat;
  
}

update(contrat:Contrat){
  this.ContratServ.updateContrat(this.idContrat,contrat).subscribe(()=>this.getAllContrat() ) 
  console.log(contrat);
  console.log(this.idContrat);
 
  
 
}






}
