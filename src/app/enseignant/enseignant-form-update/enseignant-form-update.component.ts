import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/Core/models/enseignant';
import { module } from 'src/app/Core/models/module';
import { EnseignantServiceService } from 'src/app/Core/services/enseignant-service.service';
import { ModuleService } from 'src/app/Core/services/module.service';
@Component({
  selector: 'app-enseignant-form-update',
  templateUrl: './enseignant-form-update.component.html',
  styleUrls: ['./enseignant-form-update.component.css']
})
export class EnseignantFormUpdateComponent implements OnInit {
  myforme=new FormGroup({
    idEnseignant:new FormControl(0),
    nomEnseignant:new FormControl('',Validators.required),
    prenomEnseignant:new FormControl('',Validators.required),
    nomMatiere:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}")]),
    age:new FormControl(0,Validators.required),
    salaire:new FormControl(0,Validators.required),
    experienceParAnnee:new FormControl(0,Validators.required),
     
  })
 
  constructor( private route:Router,private ActivatedRoute:ActivatedRoute,private enseignantService:EnseignantServiceService,private moduleService:ModuleService) { }
 /*--------------------Les variables , my forme ------------------------*/
  idEnseignant:number;
  enseignant:Enseignant;
  listModule:module[];
  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(data => this.idEnseignant = Number(data.get('id')));  
    this.moduleService.getModule().subscribe(data=>this.listModule=data)
    this.enseignantService.getEnseignantById(this.idEnseignant).subscribe((data)=>
    {this.enseignant=data
      
      this.myforme.setValue({
        idEnseignant:Number(this.enseignant.idEnseignant),
        nomEnseignant: String(this.enseignant.nomEnseignant),  
        prenomEnseignant:String(this.enseignant.prenomEnseignant), 
        nomMatiere:String(this.enseignant.nomMatiere),
        email:String(this.enseignant.email), 
        age:Number(this.enseignant.age),
        salaire:Number(this.enseignant.salaire),
        experienceParAnnee:Number(this.enseignant.experienceParAnnee),      
      });
  })
  }
  /*---------------------- update enseignant -------------------------------*/
  update(){
     let enseignantUpdated=this.myforme.value as unknown as Enseignant ;
     this.enseignantService.updateEnseignant(this.idEnseignant,enseignantUpdated).subscribe((data)=>
      {
        this.route.navigate(['/enseignant'])
      });
  }
}
