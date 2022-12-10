import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { UpdateDepartmenetComponent } from './update-departement/update-departmenet.component';


@NgModule({
  declarations: [
    AddDepartementComponent,
    ListDepartementComponent,
    UpdateDepartmenetComponent,
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule
  ]
})
export class DepartementModule { }
