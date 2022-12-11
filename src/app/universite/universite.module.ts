import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteMainComponent } from './universite-main/universite-main.component';
import { UniversiteFormAddComponent } from './universite-form-add/universite-form-add.component';
import { UniversiteFormUpdateComponent } from './universite-form-update/universite-form-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
   
    UniversiteFormAddComponent,
    UniversiteMainComponent,
    UniversiteFormUpdateComponent

  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    

  ]
})
export class UniversiteModule { }
