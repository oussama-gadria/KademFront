import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Enseignant } from 'src/app/Core/models/enseignant';
import { module } from 'src/app/Core/models/module';
import { EnseignantServiceService } from 'src/app/Core/services/enseignant-service.service';
import { ModuleService } from 'src/app/Core/services/module.service';

@Component({
  selector: 'app-enseignant-form-add',
  templateUrl: './enseignant-form-add.component.html',
  styleUrls: ['./enseignant-form-add.component.css']
})
export class EnseignantFormAddComponent implements OnInit {
  /*---------------------les Variables --------------------*/
  enseignant:Enseignant;
  listModule:module[];
  style1="grey";
  style2="bold";
  style3="small";

  
  constructor(private enseignantService:EnseignantServiceService,private moduleService:ModuleService,private route:Router) { 
    }

    /*---------------------------------myforme-------------------------------*/ 
    myforme=new FormGroup({ 
    nomEnseignant:new FormControl('',Validators.required),
    prenomEnseignant:new FormControl('',Validators.required),
    nomMatiere:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}")]),
    age:new FormControl(0,[Validators.required,Validators.min(1)]),
    salaire:new FormControl(0,[Validators.required,Validators.min(1)]),
    experienceParAnnee:new FormControl(0,[Validators.required,Validators.min(0)]),
  })

  /*------------------------Get All Module------------------------------------*/
  ngOnInit(): void {
   this.moduleService.getModule().subscribe((data)=>this.listModule=data)
  }

  /*------------------------Save Enseignant -----------------------------------*/
  save(id:String){
    let enseignantAdd=this.myforme.value as Enseignant ;
    this.enseignantService.addEneignantWithModule(id,enseignantAdd).subscribe(()=>this.route.navigate(['/enseignant']));
        
  }

}
