import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { UpdateDepartmenetComponent } from './update-departement/update-departmenet.component';

const routes: Routes = [
  {path:"",component:ListDepartementComponent},
  {path:"AddDepartement",component:AddDepartementComponent},
  {path:"UpdateDepartement",component:UpdateDepartmenetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
