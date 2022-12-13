import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/Core/models/departement';
import { module } from 'src/app/Core/models/module';
import { DepartementService } from 'src/app/Core/services/departement.service';
import { ModuleService } from 'src/app/Core/services/module.service';

@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrls: ['./update-module.component.css']
})
export class UpdateModuleComponent implements OnInit {

  module:module;
  moduleRetour:any;
  IdModule:number;
  ListDep:Departement[];
  style1="red";
  style2="bold";
  style3="small";

  myFormM = new FormGroup({
    nomModule: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
    nbrMatieres: new FormControl(0,Validators.required),
    
    //ListEnseignant:new FormControl('')
  })

  constructor(private moduleServ:ModuleService, private route:Router,private ActivatedRoute:ActivatedRoute, private departementService:DepartementService) { }

  ngOnInit(): void {
    this.departementService.getDepart().subscribe((data:Departement[])=>this.ListDep=data);

    this.ActivatedRoute.paramMap.subscribe(data => this.IdModule = Number(data.get('id')));
    console.log(this.IdModule);

    this.moduleServ.getModuleById(this.IdModule).subscribe((data)=>
   {    
        this.module=data
        this.myFormM.setValue({
        nomModule: String(this.module.nomModule), 
        nbrMatieres:Number(this.module.nbrMatieres),
      
        //ListEnseignant:String(this.module.listEnseignant)
    });
  })
}

  updateModule()
  {

     let moduleupdated=this.myFormM.value as unknown as module  ;
    
    this.moduleServ.updateModule(moduleupdated,this.IdModule).subscribe(
    (data)=>this.route.navigate(['/departement/ListModule']))
      
  }
}
