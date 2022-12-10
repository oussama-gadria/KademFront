import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteFormAddComponent } from '../universite/universite-form-add/universite-form-add.component';
import { EnseignantFormAddComponent } from './enseignant-form-add/enseignant-form-add.component';
import { EnseignantFormUpdateComponent } from './enseignant-form-update/enseignant-form-update.component';
import { EnseignantMainComponent } from './enseignant-main/enseignant-main.component';

const routes: Routes = [
  {path:"",component:EnseignantMainComponent},
  {path:"addEnseignant",component:EnseignantFormAddComponent},
  {path:"editEnseignant",component:EnseignantFormUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantRoutingModule { }
