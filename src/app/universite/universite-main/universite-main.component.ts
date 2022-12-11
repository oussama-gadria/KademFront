import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/Core/models/departement';
import { Enseignant } from 'src/app/Core/models/enseignant';
import { Universite } from 'src/app/Core/models/universite';
import { DepartementService } from 'src/app/Core/services/departement.service';
import { EnseignantServiceService } from 'src/app/Core/services/enseignant-service.service';
import { UniversiteServiceService } from 'src/app/Core/services/universite-service.service';
import { UniversiteFormAddComponent } from '../universite-form-add/universite-form-add.component';
import { UniversiteFormUpdateComponent } from '../universite-form-update/universite-form-update.component';

@Component({
  selector: 'app-universite-main',
  templateUrl: './universite-main.component.html',
  styleUrls: ['./universite-main.component.css']
})
export class UniversiteMainComponent implements OnInit {

  constructor(private UniversiteService:UniversiteServiceService ,private router:Router,private departmentService:DepartementService) { }
  @ViewChild(UniversiteFormUpdateComponent) private updateUniversiteCp:UniversiteFormUpdateComponent;

  
  idUniversiteToDelete:number;
  UniversiteList:Universite[];
  listDepartment:Departement[];
  detailsUniversite:string;
  searchUniversite:string="";
  ngOnInit(): void {
  this.UniversiteService.getAllUniversite().subscribe(data=>this.UniversiteList=data);
  }

  up(universite:Universite){
    this.updateUniversiteCp.init(universite);
  }
  update(universite:Universite){
    this.UniversiteService.updateUniversite(universite.idUniversite as number,universite).subscribe((res)=>{
      console.log("res",res);
    }) 
    this.UniversiteService.getAllUniversite().subscribe(data=>this.UniversiteList=data);
  }
  
  getIdUniversite(id:number){ 
  this.idUniversiteToDelete=id;
  }
  
  delete(){ 
    this.UniversiteService.deleteUniversite(this.idUniversiteToDelete).subscribe(()=>this.UniversiteList=this.UniversiteList.filter(Universite=>Universite.idUniversite!=this.idUniversiteToDelete))
  }
  
  getAllDepartment(){
   this.departmentService.getDepart().subscribe(data=>this.listDepartment=data)
  }
  addDepartToUniv(idDepartement:string){
    this.UniversiteService.addDepartementToUniversite(this.idUniversiteToDelete,idDepartement).subscribe(()=>this.UniversiteList=this.UniversiteList.filter(Universite=>Universite.idUniversite!=this.idUniversiteToDelete));
    location.reload();
  }
  
  search() 
  { 
    return this.UniversiteList.filter(univ=> { 
      return univ.nomUniversite.includes(this.searchUniversite);
    })
  }
   
  }

  


