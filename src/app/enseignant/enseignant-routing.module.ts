import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnseignantFormAddComponent } from './enseignant-form-add/enseignant-form-add.component';
import { EnseignantMainComponent } from './enseignant-main/enseignant-main.component';

const routes: Routes = [
  {path:"",component:EnseignantMainComponent},
  {path:"addEnseignant",component:EnseignantFormAddComponent},
  {path:"editEnseignant",component:EnseignantFormAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantRoutingModule { }
