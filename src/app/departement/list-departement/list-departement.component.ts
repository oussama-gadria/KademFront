import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/Core/models/departement';
import { DepartementService } from 'src/app/Core/services/departement.service';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})
export class ListDepartementComponent implements OnInit {

  ListDepart:Departement[];
  idTodelete:number;

  constructor(private route:Router,private departementService:DepartementService) { }

  ngOnInit(): void {
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
}
