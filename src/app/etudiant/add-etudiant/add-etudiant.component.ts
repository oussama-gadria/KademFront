import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Departement } from 'src/app/Core/models/departement';
import { Etudiant } from 'src/app/Core/models/etudiant';
import { DepartementService } from 'src/app/Core/services/departement.service';
import { EtudiantService } from 'src/app/Core/services/etudiant.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
  style1="red";
  style2="bold";
  style3="small";
  nomDepart:String
  listDepartments:Departement[]; 
  etudiant:Etudiant
  

    AddFormEtudiant=this.fb.group({  
    nomE:["",[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
    prenomE:["",[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
    email:["",[Validators.required,Validators.email]],
    numeroTelephone:["",[Validators.required,Validators.minLength(8)]],
    adresse:["",Validators.required],
    age:["",[Validators.required,Validators.max(100)]],
    niveauEtudiant:[0,Validators.required],
    option:["",Validators.required],
    classe:[0,Validators.required],
    moyenneE:[0,Validators.required]
   
  })




  constructor(private DepartServ:DepartementService, private etudiantServ:EtudiantService,private route:Router, private fb:FormBuilder) { }



  ngOnInit(): void {
    this.getAllDepartments();
    console.log(this.listDepartments)
  }
  
  ///// recuperez la liste des departements pour afficher dans la formulaire de l'ajout de l'etudiant
  getAllDepartments()
  {
    this.DepartServ.getDepart().subscribe((data)=>this.listDepartments=data);
  }


  AddEtudiant(nom:string)
  {
  let etudiant=this.AddFormEtudiant.value as unknown as Etudiant;
  this.etudiantServ.addEtudiant(nom,etudiant).subscribe((data)=>
  {this.etudiant=data
  this.route.navigate(['/etudiant']);
  })
  }






}
