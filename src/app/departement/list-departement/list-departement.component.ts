import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/Core/models/departement';
import { module } from 'src/app/Core/models/module';
import { DepartementService } from 'src/app/Core/services/departement.service';
import { UpdateDepartmenetComponent } from '../update-departement/update-departmenet.component';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})
export class ListDepartementComponent implements OnInit {

  ListDepart:Departement[];
  idTodelete:number;
  departement:Departement;
  searchDepart:string="";
  IdDepart:number;

  constructor(private route:Router,private departementService:DepartementService) { }

  @ViewChild(UpdateDepartmenetComponent) private updateDepartementCp:UpdateDepartmenetComponent;

  ngOnInit(): void {
    this.departementService.getDepart().subscribe((data:Departement[])=>this.ListDepart=data);
  
  }
  getALLdepartments()
  {
    this.departementService.getDepart().subscribe((data:Departement[])=>this.ListDepart=data); 
  }

  GoToAddDepartement(){

    this.route.navigate(['departement/AddDepartement']);
  }
  getIdToDelete(id:number)
  {
    this.idTodelete=id;
  }

  deleteDepart()
  {
    this.departementService.deleteDepartement(this.idTodelete).subscribe(()=>this.ListDepart=this.ListDepart.filter(Departement=>Departement.idDepart!=this.idTodelete));
  }

  search() 
  { 
    return this.ListDepart.filter(departement=> { 
      return departement.nomDepart.includes(this.searchDepart);
    })
  }

  initToChild(departement:Departement){
    this.updateDepartementCp.initFormUpdateDep(departement);
    this.IdDepart=departement.idDepart;
  }

  update(departement:Departement){
    this.departementService.updateDepartement(departement,this.IdDepart).subscribe(()=>this.getALLdepartments()) 
   
  }

}
