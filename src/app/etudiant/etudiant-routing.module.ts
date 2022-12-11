import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';

const routes: Routes = [
  {path:"",component:ListEtudiantComponent},
  {path:"AddEtudiant",component:AddEtudiantComponent},
  {path:"UpdateEtudiant",component:UpdateEtudiantComponent},

  {path:"AddContrat/:id",component:AddContratComponent},
  {path:"ListContrat/UpdateContrat",component:UpdateContratComponent},
  {path:"ListContrat",component:ListContratComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
