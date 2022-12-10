import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteComponent } from './universite/universite.component';
import { UniversiteMainComponent } from './universite-main/universite-main.component';
import { UniversiteFormAddComponent } from './universite-form-add/universite-form-add.component';
import { UniversiteFormUpdateComponent } from './universite-form-update/universite-form-update.component';


@NgModule({
  declarations: [
    UniversiteComponent,
    UniversiteFormAddComponent,
    UniversiteMainComponent,
    UniversiteFormUpdateComponent

  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule
  ]
})
export class UniversiteModule { }
