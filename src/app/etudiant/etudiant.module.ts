import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';



@NgModule({
  declarations: [
    AddEtudiantComponent,
    ListEtudiantComponent,
    UpdateEtudiantComponent,
    AddContratComponent,
    UpdateContratComponent,
    ListContratComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    ReactiveFormsModule,
    FormsModule
   
   
  ]
})
export class EtudiantModule { }
