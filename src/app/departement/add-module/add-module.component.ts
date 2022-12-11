import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departement } from 'src/app/Core/models/departement';
import { module } from 'src/app/Core/models/module';
import { DepartementService } from 'src/app/Core/services/departement.service';
import { ModuleService } from 'src/app/Core/services/module.service';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {

module:module;
ListDep:Departement[];
ListModule:module[];

  myFormM = new FormGroup({
    moduleNom: new FormControl('',Validators.required),
    moduleNbr: new FormControl('',Validators.required),
    DepartmentNom:new FormControl('',Validators.required)
  })

  constructor(private departementService:DepartementService, private moduleService:ModuleService, private route:Router) { 
    this.module=new module();
  }

  ngOnInit(): void {
    this.departementService.getDepart().subscribe((data:Departement[])=>this.ListDep=data);
  }

  AddMod(nomDepart:String){
    this.moduleService.addModuleWithDepName(this.module,nomDepart).subscribe(data=>this.ListModule=data);
    this.route.navigate(['/departement/ListModule']);
  }
}
