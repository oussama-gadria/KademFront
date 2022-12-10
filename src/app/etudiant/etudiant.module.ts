import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';



@NgModule({
  declarations: [
    AddEtudiantComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule
   
  ]
})
export class EtudiantModule { }
