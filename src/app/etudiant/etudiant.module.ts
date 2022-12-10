import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';



@NgModule({
  declarations: [
    AddEtudiantComponent,
    ListEtudiantComponent,
    UpdateEtudiantComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule
   
  ]
})
export class EtudiantModule { }
