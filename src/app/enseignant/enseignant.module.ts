import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EnseignantFormAddComponent } from './enseignant-form-add/enseignant-form-add.component';
import { EnseignantMainComponent } from './enseignant-main/enseignant-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnseignantFormUpdateComponent } from './enseignant-form-update/enseignant-form-update.component';


@NgModule({
  declarations: [
    EnseignantComponent,
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
