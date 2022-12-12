import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { module } from 'src/app/Core/models/module';
import { ModuleService } from 'src/app/Core/services/module.service';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.css']
})
export class ListModuleComponent implements OnInit {

  ListModule:module[];
  idTodelete:number;
  module:module;
  searchMod:string="";

  constructor(private route:Router, private moduleService:ModuleService) { }

  ngOnInit(): void {
    this.moduleService.getModule().subscribe((data:module[])=>this.ListModule=data);
  }

  GoToAddModule(){
    this.route.navigate(['departement/AddModule']);
  }

  getIdTooDelete(id:number){
    this.idTodelete=id;
  }
  deleteModule()
  {
    this.moduleService.deleteModule(this.idTodelete).subscribe(()=>this.ListModule=this.ListModule.filter(module=>module.idModule!=this.idTodelete));
  }
  search() 
  { 
    return this.ListModule.filter(module=> { 
      return module.nomModule.includes(this.searchMod);
    })
  }

}
