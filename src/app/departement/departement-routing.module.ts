import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { ListModuleComponent } from './list-module/list-module.component';
import { UpdateDepartmenetComponent } from './update-departement/update-departmenet.component';
import { UpdateModuleComponent } from './update-module/update-module.component';

const routes: Routes = [
  {path:"",component:ListDepartementComponent},
  {path:"AddDepartement",component:AddDepartementComponent},
  {path:"UpdateDepartement/:id",component:UpdateDepartmenetComponent},

  {path:"ListModule",component:ListModuleComponent},
  {path:"AddModule",component:AddModuleComponent},
  {path:"ListModule/UpdateModule",component:UpdateModuleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
