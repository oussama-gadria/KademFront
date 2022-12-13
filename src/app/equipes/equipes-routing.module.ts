import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';


const routes: Routes = [
  {path:"addEquipe",component:AddEquipeComponent},
  {path:"updateEquipe/:id",component:UpdateEquipeComponent},
  {path:"listMembres/:id",component:ListEtudiantComponent},
  {path:"addDetail",component:AddDetailComponent},
  {path:"**",component:ListEquipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipesRoutingModule { }
