import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';

import { EnseignantFormAddComponent } from './enseignant-form-add/enseignant-form-add.component';
import { EnseignantMainComponent } from './enseignant-main/enseignant-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnseignantFormUpdateComponent } from './enseignant-form-update/enseignant-form-update.component';


@NgModule({
  declarations: [
    
    EnseignantFormAddComponent,
    EnseignantMainComponent,
    EnseignantFormUpdateComponent

    

  ],
  imports: [
    CommonModule,
    EnseignantRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EnseignantModule { }
