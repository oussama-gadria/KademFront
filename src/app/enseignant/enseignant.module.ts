import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EnseignantFormAddComponent } from './enseignant-form-add/enseignant-form-add.component';
import { EnseignantMainComponent } from './enseignant-main/enseignant-main.component';


@NgModule({
  declarations: [
    EnseignantComponent,
    EnseignantFormAddComponent,
    EnseignantMainComponent,
    

  ],
  imports: [
    CommonModule,
    EnseignantRoutingModule
  ]
})
export class EnseignantModule { }
