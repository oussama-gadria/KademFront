import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';


const routes: Routes = [
  {path:"addEquipe",component:AddEquipeComponent},
  {path:"updateEquipe",component:UpdateEquipeComponent},
  {path:"listMembres",component:ListEtudiantComponent},
  {path:"**",component:ListEquipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipesRoutingModule { }
