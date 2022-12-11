import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { UpdateDepartmenetComponent } from './update-departement/update-departmenet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddModuleComponent } from './add-module/add-module.component';
import { UpdateModuleComponent } from './update-module/update-module.component';
import { ListModuleComponent } from './list-module/list-module.component';


@NgModule({
  declarations: [
    AddDepartementComponent,
    ListDepartementComponent,
    UpdateDepartmenetComponent,
    AddModuleComponent,
    UpdateModuleComponent,
    ListModuleComponent,

  ],
  imports: [
    CommonModule,
    DepartementRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DepartementModule { }
