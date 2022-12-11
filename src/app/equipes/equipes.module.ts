import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquipesRoutingModule } from './equipes-routing.module';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { AddDetailComponent } from './add-detail/add-detail.component';


@NgModule({
  declarations: [
    ListEquipeComponent,
    AddEquipeComponent,
    UpdateEquipeComponent,
    ListEtudiantComponent,
    AddDetailComponent
  ],
  imports: [
    CommonModule,
    EquipesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EquipesModule { }
