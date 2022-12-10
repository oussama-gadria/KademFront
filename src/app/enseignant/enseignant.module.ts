import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EnseignantFormAddComponent } from './enseignant-form-add/enseignant-form-add.component';
import { EnseignantMainComponent } from './enseignant-main/enseignant-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EnseignantComponent,
    EnseignantFormAddComponent,
    EnseignantMainComponent,
    

  ],
  imports: [
    CommonModule,
    EnseignantRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EnseignantModule { }
