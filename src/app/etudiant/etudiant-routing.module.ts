import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';

const routes: Routes = [
  {path:"",component:ListEtudiantComponent},
  {path:"AddEtudiant",component:AddEtudiantComponent},
  {path:"UpdateEtudiant",component:UpdateEtudiantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
